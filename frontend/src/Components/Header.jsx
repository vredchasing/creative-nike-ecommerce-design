import { useState, useEffect } from "react"

function Header (){

    return (
        <header className="header">
            <nav className="navbar">
                <div className="navbar-left">
                    <div className="logo-container">
                        <img className="logo" src="/images/nike-logo.svg"></img>
                    </div>
                </div>
                <div className="navbar-middle">
                    <ul className="header-categories-ul">
                    </ul>
                </div>
                <div className="navbar-right">
                    <ul className="header-categories-ul">
                        <li className="header-navlink">Home</li>
                        <li className="header-navlink">Shop</li>
                        <li className="header-navlink">Login</li>
                        <li className="header-navlink">Sign Up</li>
                    </ul>
                </div>
            </nav>
        </header>
    )

}

export default Header