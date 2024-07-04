import { useState, useEffect } from "react"

function Header (){
    const [lastScroll, setLastScroll] = useState(0)
    const [showHeader, setShowHeader] = useState(true)

    const handleScroll = () => {
        if(window.scrollY>lastScroll){
            setShowHeader(false)
        }
        else if (window.scrollY<lastScroll){
            setShowHeader(true)
        }
        setLastScroll(window.scrollY)
        console.log(lastScroll)
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)

        return ()=>{
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScroll, showHeader])

    return (
        <header className={showHeader ? "headerShow" : "headerHide"}>
            <nav className="navbar">
                <div className="navbar-left">
                    <div className="logo-container">
                        <img className="logo" src="/images/nike-logo.svg"></img>
                    </div>
                </div>
                <div className="navbar-middle">
                    <ul className="header-categories-ul">
                        <li className="header-category">New & Featured</li>
                        <li className="header-category">Men</li>
                        <li className="header-category">Women</li>
                        <li className="header-category">Kids</li>
                        <li className="header-category">Accessories</li>
                        <li className="header-category">Sale</li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <div>
                        <input className="search" placeholder="Search"></input>
                    </div>
                    <img className="favorite-icon" src="/images/favorite-icon.svg"></img>
                    <img className="bag-icon" src="/images/bag-icon.svg"></img>
                </div>
            </nav>
        </header>
    )

}

export default Header