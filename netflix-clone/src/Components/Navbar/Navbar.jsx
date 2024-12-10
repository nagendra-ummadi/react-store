import React from 'react'
import "./Navbar.css";
import { useState, useEffect } from 'react';
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search_icon.svg";
import bellIcon from "../../assets/bell_icon.svg";
import profileImg from "../../assets/profile_img.png"
import caretImg from "../../assets/caret_icon.svg";
const Navbar = () => {
    const [isAtBottom, setIsAtBottom] = useState(false);

    const handleScroll = () => {
    const navbar = document.querySelector("navbar")
    const scrolledToBottom = window.innerHeight + window.scrollY >= window.innerHeight+100
    console.log("w" ,window.innerHeight)
    console.log("scrolly" ,window.scrollY)
    // console.log(window.body.offsetHeight)
    console.log(scrolledToBottom)
    if (scrolledToBottom) {
        setIsAtBottom(true);
    } else {
        setIsAtBottom(false);
    }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <div className={`navbar ${isAtBottom?"scroll":""}`}>
        <div className='navbar-left'>
            <img src={logo} alt='Netflix-Logo' />
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My Lists</li>
                <li>Language</li>
            </ul>
        </div>
        <div className='navbar-right'>
            <img src={searchIcon} alt='search-icon' className='icons' />
            <p>Children</p>
            <img src={bellIcon} alt="bell-icon" className='icons'/>
            <div className='navbar-profile'>
                <img src={profileImg} alt="profile-icon" className='profile'/>
                <img src={caretImg} alt="menu-icon" />
                <div className='dropdown'>
                <p>Sign Out</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;