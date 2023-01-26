import React from 'react'
import { Link } from 'react-router-dom'

function NavLink({ href, label, className, ...props }) {
    return <Link className={`lg:block text-xl font-tb uppercase mr-8 hover:text-brand ${className}`} to={href} {...props}>{label}</Link>
}

export default NavLink