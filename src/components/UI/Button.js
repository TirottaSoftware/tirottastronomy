import React from 'react'
import { Link } from 'react-router-dom'

// cta: styling property, true by default, renders a ghost-styled button if set to false
// external: boolean property for deciding whether the link is external or not
// className: additional styles (if needed)
function Button({ href, cta = true, external, className, children, ...props }) {
    return (
        <>
            {
                // If there is an href property, render a link
                href ?
                    <>
                        {
                            // If external is set to true, render an external link with an absolute path
                            // Else, render a Link from react-router-dom
                            external
                                ? <a href={href} className={`${cta ? "bg-brand text-white" : "border-2 border-brand text-brand"} cursor-pointer py-2 px-8 lg:py-4 lg:px-16 text-xl lg:text-2xl font-tb font-medium ${className}`} {...props}>{children}</a>
                                : <Link to={href} className={`${cta ? "bg-brand text-white" : "border-2 border-brand text-brand"} cursor-pointer py-2 px-8 lg:py-4 lg:px-16 text-xl lg:text-2xl font-tb font-medium ${className}`} {...props}>{children}</Link>
                        }
                    </>
                    :
                    <button className={`${cta ? "bg-brand text-white" : "border-2 border-brand text-brand"} cursor-pointer py-2 px-8 lg:py-4 lg:px-16 text-xl lg:text-2xl font-tb font-medium ${className}`} {...props}>{children}</button>
            }
        </>
    )
}

export default Button