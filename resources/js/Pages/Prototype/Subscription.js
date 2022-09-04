import SubscriptionCard from '@/Components/SubscriptionCard'
import Autentikasi from '@/Layouts/Authenticated/Autentikasi'
import React from 'react'

export const Subscription = () => {
    return (
        <Autentikasi>
            <div className="ml-[20px] px-[50px]">
                <div className="py-20 flex flex-col items-center">
                    <div className="text-black font-semibold text-[26px] mb-3">
                        Pricing for Everyone
                    </div>
                    <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                        Invest your little money to get a whole new experiences from movies.
                    </p>

                    <div className="flex justify-center gap-10 mt-[70px]">

                        <SubscriptionCard 
                            name="Basic"
                            price={50000}
                            durationInMonth={3}
                            feature={["Feature 1", "Feature 2", "Feature 3"]}

                        />
                        <SubscriptionCard 
                            isPremium 
                            name="For Greatest"
                            price={100000}
                            durationInMonth={6}
                            feature={["Feature 1", "Feature 2", "Feature 3"]}
                        />

                    </div>

                </div>
            </div>
        </Autentikasi>
    )
}

export default Subscription
