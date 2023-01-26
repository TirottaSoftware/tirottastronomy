import React from 'react'
import Navbar from './Navbar'

import { useLocation } from 'react-router-dom';

function Layout({ children }) {
    const location = useLocation();
    return (
        <>
            <Navbar />
            <main className={`${location.pathname === "/" || location.pathname === "/login" || location.pathname === "/signup" ? "w-full" : "w-10/12 mx-auto"}`}>
                {children}
            </main>
        </>
    )
}

export default Layout