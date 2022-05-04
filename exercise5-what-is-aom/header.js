import React, {useEffect, useRef} from "react"
import "./styles/header.scss"

import CampSpotsLogo from "images/icons/camp-spots-logo.svg"
import MegaNav from "./meganav/"

const Header = () => {
    const linkRef = useRef(null)
    useEffect(() => {
        if (document.location.pathname === '/') {
            linkRef.current.ariaCurrent = 'page'
        }
    }, [])
    return (
        <div id="header">
            <div id="header-nav">
                <div id="header-logo">
                    <a href="/" className="header-main-item" ref={linkRef}>
                        <span className="logo-img">
                            <img src={CampSpotsLogo} alt="" />
                        </span>
                        <span className="logo-text">CampSpots</span>
                    </a>
                </div>
                <MegaNav />
                <div id="header-login">
                    <a href="#">Login</a>
                </div>
            </div>
        </div>
    )
}

export default Header