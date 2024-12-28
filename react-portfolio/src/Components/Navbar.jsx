import React from "react";
import "./Navbar.css";
import { useState, useEffect } from "react";
import menuIcon from '../assets/menuIcon.png';
import closeIcon from '../assets/closeIcon.png';
import Logo from "../assets/logo2.png";


function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80);
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <div className={`navbar-container ${isScrolled}? "scrolled":"" `}>
            <nav className="navbar ">
            {/* <img src="./src/assets/logo.png" alt="logo" /> */}
            <a className="nav-title" href="/">N-Reactify</a>

            <div className="menu">
                {/* <FontAwesomeIcon icon={burger} /> */}
                <img className="menuBtn" src={menuOpen ? closeIcon : menuIcon} alt="menu-button" 
                onClick={()=> setMenuOpen(!menuOpen)} />
                <ul className="menu-items" id={`${menuOpen && "menu-open"}`} onClick={()=> setMenuOpen(false)}>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>

                </ul>
            </div>
        </nav>
        </div>
    )
}

export default Navbar;