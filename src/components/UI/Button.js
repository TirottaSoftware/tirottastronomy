import React from 'react'

function Button({ href, type = "cta", target, className, children, ...props }) {
    return (
        <a href={href} target={target} className={`${type === "cta" ? "bg-brand text-white" : "border-2 border-brand text-brand"} cursor-pointer py-2 px-8 lg:py-4 lg:px-16 text-xl lg:text-2xl font-tb font-medium ${className}`} {...props}>{children}</a>
    )
}

export default Button