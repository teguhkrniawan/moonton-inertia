import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import route from 'vendor/tightenco/ziggy/src/js'

const MenuItem = ({
    link,
    icon,
    text,
    isActive,
    method = "get"
}) => {

    return (
        <>
            <Link 
                href={ link ? route(link) : null } 
                className={`side-link ${isActive && 'active'}`}
                method={method}
                as="button"
            >
                { icon }
                { text }
            </Link>
        </>
    )
}

export default MenuItem
