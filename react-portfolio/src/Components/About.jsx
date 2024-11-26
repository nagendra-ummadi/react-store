import React, { useEffect } from "react";
import "./About.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import aboutImg from "../assets/aboutImage.png";
import cursorIcon from "../assets/cursorIcon.png";
import serverIcon from "../assets/serverIcon.png";
import uiIcon from "../assets/uiIcon.png";
import AOS from 'aos';
import '../../node_modules/aos/dist/aos.css';

function About(){
    useEffect(()=>{
        AOS.init({
            duration: 2000, // Animation duration in milliseconds
            easing: "ease-in-out", // Easing function
            once: false, // Only animate once
          });
    },[])
    return (
        <section id="about">
            <h1 className="about-title">About</h1>
            <div className="about-container" data-aos="zoom-in-up">
                <img src= {aboutImg} alt="working-img" className="about-image" />
                <ul className="about-items">
                    <li className="about-item">
                        <img src={cursorIcon} alt="cursor-img" />
                        <div className="about-item-content">
                            <h3>Frontend Development</h3>
                            <p>I am a Frontend Developer with a strong foundation in JavaScript, Figma, and React. I am passionate about creating 
                                responsive and user-friendly interfaces that enhance user experience.
                            </p>
                        </div>
                    </li>
                    <li className="about-item">
                        <img src={serverIcon} alt="server-img" />
                        <div className="about-item-content">
                            <h3>Fullstack Development</h3>
                            <p>I am a Fullstack Web Developer with a strong foundation in React, Node.js, Express.js, and MongoDB/Firebase. I specialize in building dynamic, 
                                user-friendly web applications with seamless front-end and back-end integration.
                            </p>
                        </div>
                    </li>
                    <li className="about-item">
                        <img src={uiIcon} alt="ui-img" />
                        <div className="about-item-content">
                            <h3>Data Analytics</h3>
                            <p>
                            I am a Data Analyst with a strong foundation in analyzing complex datasets and deriving actionable insights. 
                            My expertise includes data visualization, statistical analysis, 
                            and creating impactful dashboards to support data-driven decision-making.

                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About;