import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import profile from "../assets/profile.jpg"
import React, { useEffect, useState } from "react";
import "./Hero.css";
import resume from "../assets/Nagendra_Resume.pdf";
import AOS from 'aos';
import '../../node_modules/aos/dist/aos.css'
import Typed from '../../node_modules/typed.js'
import { useRef } from "react";
function Hero(){
    const titleArray = ["Hello, I'm Nagendra 👋", "Web Developer", "UI/UX Designer", "Python Developer","Data Analyst"]
    const [titleIndex, setTitleIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)

    const el = useRef(null)


    useEffect(()=>{
        AOS.init({
            duration: 2000, // Animation duration in milliseconds
            easing: "linear", // Easing function
            // once: false, // Only animate once
          });
    },[])

    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ["Hello, I'm Nagendra 👋", "Web Developer", "UI/UX Designer", "Python Developer","Data Analyst"],
          typeSpeed: 50,
          loop: true,
          backDelay: 900,
          backSpeed: 30,
          showCursor: false
          
        });
    
        return () => {
          // Destroy Typed instance during cleanup to stop animation
          typed.destroy();
        };
      }, []);
    return (
        <section className="hero-section" id="hero">
            <div className="content">
                <span className={`dynamic-title ${isAnimating}?"fade-out":"fade-in"} `} ref={el}></span>
                <p className="description text-light">
                &nbsp;&nbsp; &nbsp;&nbsp;A passionate Fullstack Developer with a strong foundation in React.js and Node.js. Alongside my web development skills, 
                I'm proficient in Excel, SQL, Python, and Power BI, making me versatile in both development 
                and data analytics. <span className="text-info">Eager to kickstart my career in Fullstack Development or Data Analytics.</span>
                </p>
                <div className="resume-section">
                <a href="mailto:nagendraummadi1524@gmail.com" className="btn btn-primary contact-button">Contact Me</a>
                <a href={resume} download className="btn btn-danger">View Resume</a>
                </div>
            </div>
            <img src={profile}  alt="profile image" className="profile-img" data-aos="flip-left"/>
        </section>
    )
}

export default Hero




