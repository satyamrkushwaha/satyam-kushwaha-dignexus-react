import React from 'react'
import { navbarLinks } from '../constants/constants'

export default function Navbar() {
    return (
        <div className="navbar-main-container">
            {navbarLinks && navbarLinks.map((link, index) => (<>
                <a key={index} href={link.link} className="navbar-link">{link.name}</a>
                {link.subNames && link.subNames.map((subLink, index) => (
                    <a key={index} href={subLink.link} className="navbar-link">{subLink.name}</a>
                ))}
            </>))}
        </div>
    )
}
