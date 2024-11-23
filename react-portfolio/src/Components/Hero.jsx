import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import profile from "../assets/profile.jpg"
import React from "react";
import "./Hero.css";
import resume from "../assets/Nagendra_Resume.pdf";

function Hero(){
    return (
        <section className="hero-section">
            <div className="content">
                <h2 className="h2 text-light">Hello, I'm Nagendra, Fullstack developer and Data Analyst</h2>
                <p className="description text-light">
                A passionate Fullstack Developer with a strong foundation in React.js and Node.js. Alongside my web development skills, 
                I'm proficient in Excel, SQL, Python, and Power BI, making me versatile in both development 
                and data analytics. <span className="text-info">Eager to kickstart my career in Fullstack Development or Data Analytics.</span>
                </p>
                <div className="resume-section">
                <a href="mailto:nagendraummadi1524@gmail.com" className="btn btn-primary contact-button">Contact Me</a>
                <a href={resume} className="btn btn-danger">View Resume</a>
                </div>
            </div>
            <img src={profile}  alt="profile image" className="profile-img"/>
        </section>
    )
}

export default Hero




