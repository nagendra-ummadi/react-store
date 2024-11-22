import React, { useState } from "react"
import "./Contact.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faGithub,faHackerrank,faInstagram } from "@fortawesome/free-brands-svg-icons";
// import {db} from "./firebase";


export const Contact = () => {
    const [name,setName] = useState("");
    const [mobile,setMobile] = useState("");
    const [email,setEmail] = useState("")
    const [message,setMessage] = useState("");

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
    return(
        <section id="contact">
            <h2 className="title">Contact Me</h2>
            <div className="contact-section">
            <div className="cards-container">
                {cards.map((card, index) => (
                    <a href={card.link} target="_blank" rel="noopener noreferrer" key={index} className="card" style={{ borderColor: card.color }}>
                    <FontAwesomeIcon icon={card.icon} className="card-icon" style={{ color: card.color }} />
                    <h3 className="card-title">{card.title}</h3>
                </a>
                ))}

    </div>
                <div className="contact-form">
                    <h2>Let's Connect 📲</h2>
                    <label>Name</label>
                    <input type="text" placeholder="Your good name?" value={name} onChange={(e)=>setName(e.target.value)} required/>
                    <label>Mobile No</label>
                    <input type="number" placeholder="Your Mobile number?" pattern="[0-9]{,10}" value={mobile} onChange={(e)=>setMobile(e.target.value)}  required/>
                    <label>Email</label>
                    <input type="email" placeholder="Your Email?" value={email} onChange={(e)=>setEmail(e.target.value)}  required/>
                    <label>Message</label>
                    <textarea placeholder="Your Message" value={message} onChange={(e)=>setMessage(e.target.value)} required>
                    </textarea>

                    <button type="submit">Submit</button>
                </div>
            </div>
        </section>
    )
}