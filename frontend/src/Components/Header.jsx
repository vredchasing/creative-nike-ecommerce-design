import { useState, useEffect } from "react"
import {Link} from 'react-router-dom'

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
                        <Link to='/' className="header-navlink">Home</Link>
                        <Link to='/shop' className="header-navlink">Shop</Link>
                        <Link to='/login' className="header-navlink">Login</Link>
                        <Link to='/register' className="header-navlink">Sign Up</Link>
                    </ul>
                </div>
            </nav>
        </header>
    )

}

export default Header