import React, { useEffect, useState } from 'react'
import "./Navbar.css";
import ayodhya from "../../assets/ayodhya.webp";
import logo from "../../assets/logo.png";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const titleArray = [
        "Make Yourself At Home In Our Guest House",
        "A Place to Unwind, A Place to Belong Your Home Away from Home",
        "Where Comfort Meets Elegance  Welcome to Your Dream Stay"
    ]
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(()=>{
        
        const interval = setInterval(()=>{
            if(currentIndex !== titleArray.length){
                setCurrentIndex(currentIndex+1)
            }
            else{
                setCurrentIndex(0)
            }
        },5000)

    })
  return (
    <>
    <div className='navbar-container'>
        <div className='logo'>
            {/* <img src={logo} alt='logo' className='logo-img' /> */}
            <span>Kingsukh</span>
            <span>Guest House</span>
        </div>
        <div className='icons'>
            {menuOpen?<i className='times icon' onClick={()=> setMenuOpen(false)}></i>:
            <i className='bars icon' onClick={()=> setMenuOpen(true)}></i>}
        </div>
        <ul className={`menu-items ${menuOpen && "menuOpen"}`} id='home'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#rooms'>Rooms</a></li>
            <li><a href='#services'>Services</a></li>
            <li><a href='#gallery'>Gallery </a></li>
            <li><a href='#contact'>Contact </a></li>
        </ul>
        <div className='booking_btn'>
            <a href='https://wa.link/at5ion' className='ui red button'>Book Now</a>
        </div>
    </div>
    <img src={ayodhya}  alt='banner' className='banner' />
    <div className='welcome-title'>
       <h4>Simple-Unique-Friendly</h4>
       <h1>Make Yourself At Home <br/>
       In Our <span>Guest House</span></h1>
       {/* <h1>{titleArray[currentIndex]}</h1> */}
    </div>
    </>
  )
}

export default Navbar