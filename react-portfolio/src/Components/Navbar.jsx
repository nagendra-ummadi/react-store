import React from "react";
import "./Navbar.css";
import { useState } from "react";
import menuIcon from '../assets/menuIcon.png';
import closeIcon from '../assets/closeIcon.png';



function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            {/* <img src="./src/assets/logo.png" alt="logo" /> */}
            <a className="title" href="/">Portfolio.</a>
            <div className="menu">
                {/* <FontAwesomeIcon icon={burger} /> */}
                <img className="menuBtn" src={menuOpen ? closeIcon : menuIcon} alt="menu-button" 
                onClick={()=> setMenuOpen(!menuOpen)} />
                <ul className="menu-items" id={`${menuOpen && "menu-open"}`} onClick={()=> setMenuOpen(false)}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#Contact">Contact</a></li>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar;