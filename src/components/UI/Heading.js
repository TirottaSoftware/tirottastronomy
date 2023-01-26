import React from 'react'

function Heading({ children, className }) {
    return (
        <h1 className={`text-5xl uppercase font-halvar font-bold mb-2 ${className}`}>{children}</h1>
    )
}

export default Heading