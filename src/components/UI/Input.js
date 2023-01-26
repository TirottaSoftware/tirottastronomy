import React from 'react'

function Input({ className, ...props }) {
    return (
        <input className={`w-full my-2 pl-4 pr-12 py-4 text-xl font-tb ${className}`} {...props} />
    )
}

export default Input