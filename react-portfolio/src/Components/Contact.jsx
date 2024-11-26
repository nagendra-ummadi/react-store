import React, { useEffect, useState } from "react"
import "./Contact.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faGithub,faHackerrank,faInstagram } from "@fortawesome/free-brands-svg-icons";
import {db} from "./firebase";
import { collection,addDoc, getDoc, doc } from "firebase/firestore/lite";
import AOS from 'aos';
import '../../node_modules/aos/dist/aos.css';

export const Contact = () => {
    const [name,setName] = useState("");
    const [mobile,setMobile] = useState("");
    const [email,setEmail] = useState("")
    const [message,setMessage] = useState("");
    
    useEffect(()=>{
      AOS.init({
        duration: 2000, // Animation duration in milliseconds
        easing: "ease-in-out", // Easing function
        once: false, // Only animate once
      });
    },[])

    const cards = [
        {
          title: "LinkedIn",
          icon: faLinkedin,
          link: "https://www.linkedin.com/in/nagendra-ummadi/",
          color: "#0077b5",
        },
        {
          title: "GitHub",
          icon: faGithub,
          link: "https://github.com/nagendra-ummadi",
          color: "#333",
        },
        {
          title: "HackerRank",
          icon: faHackerrank,
          link: "https://www.hackerrank.com/profile/nagendra_u208",
          color: "#2ec866",
        },
        {
          title: "Instagram",
          icon: faInstagram,
          link: "https://www.instagram.com/darling_nagendra_14/",
          color: "#E4405F",
        },
      ];

    const handleSubmit = (e) =>{
      e.preventDefault()
      const formData = new FormData(e.target)
      const data = {}
      setTimeout(()=>{
        alert("Messge has been sended 👍")
        setName("")
        setEmail("")
        setMobile("")
        setMessage("")
      },1000)
      
      formData.forEach((val,key)=>{
        data[key] = val
      })
      addData(data)
      
    }

    async function addData(data) {
      try {
        const docRef = await addDoc(collection(db, "users"), data);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    return(
        <section id="contact">
            <h2 className="title">Contact Me</h2>
            <div className="contact-section">
            <div className="cards-container">
                {cards.map((card, index) => (
                    <a href={card.link} target="_blank" rel="noopener noreferrer" key={index} className="card" data-aos="zoom-out" style={{ borderColor: card.color }}>
                    <FontAwesomeIcon icon={card.icon} className="card-icon" style={{ color: card.color }} />
                    <h3 className="card-title">{card.title}</h3>
                </a>
                ))}
              </div>
                <div className="contact-form" data-aos="flip-right">
                <form className="form" onSubmit={handleSubmit} method="POST">
                    <h2>Let's Connect 📲</h2>
                    <label>Name</label>
                    <input type="text" placeholder="Your good name?" name="name" value={name} onChange={(e)=>setName(e.target.value)} required/>
                    <label>Mobile No</label>
                    <input type="number" placeholder="Your Mobile number?" name="mobile" pattern="[0-9]{,10}" value={mobile} onChange={(e)=>setMobile(e.target.value)}  required/>
                    <label>Email</label>
                    <input type="email" placeholder="Your Email?" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}  required/>
                    <label>Message</label>
                    <textarea placeholder="Your Message" name="message" value={message} onChange={(e)=>setMessage(e.target.value)} required>
                    </textarea>

                    <button type="submit">Send</button>
                </form>
                </div>

            </div>
            <footer className="footer">
              <p>Crafting seamless interfaces and uncovering insights through data.</p>
              <small>©  Nagendra Obuldasu Ummadi. All rights reserved.</small>
            </footer>
            
        </section>
        
    )
}