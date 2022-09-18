import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import Subsdate from './Subsdate'
import { UserMenu, UserOther } from './UserMenu'
import MenuItem from './MenuItem'

const Sidebar = ({ auth }) => {

    return (
        <>
            <aside className="fixed z-50 w-[300px] h-full">
                <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full">
                    <a href="/">
                        <img src="/images/moonton.svg" alt="" />
                    </a>
                    <div className="links flex flex-col mt-[60px] h-full gap-[50px]">

                        <div>
                            <div className="text-gray-1 side-link mb-4">Menu</div>
                            {
                                UserMenu.map((item, index) => (
                                    <MenuItem
                                        key={index}
                                        link={item.link}
                                        icon={item.icon}
                                        text={item.text}
                                        isActive={item.link && route().current(item.link)}
                                    />
                                ))
                            }
                        </div>

                        <div>
                            <div className="text-gray-1 side-link mb-4">Others</div>
                            {
                                UserOther.map((item, index) => (
                                    <MenuItem 
                                        key={index}
                                        link={item.link}
                                        icon={item.icon}
                                        text={item.text}
                                        method={item.method}
                                        isActive={item.link && route().current(item.link)}
                                    />
                                ))
                            }
                        </div>

                        {
                            auth.isActive && (
                                <Subsdate
                                    name={auth.isActive.name}
                                    remainingActiveDays={auth.isActive.remainingActiveDays}
                                    activeDays={auth.isActive.activeDays}
                                />
                            )
                        }
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Sidebar
