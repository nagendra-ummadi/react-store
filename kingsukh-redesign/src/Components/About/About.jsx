import React from "react";
import out from "../../assets/out.jpg";
import "./About.css";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-left">
        <img src={out} alt="image" />
      </div>
      <div className="about-right">
        <h3>About</h3>
        <h1>The Best Holidays Start Here!</h1>
        <p>Embark on a tranquil journey at our Kingsukh Guest House, enveloped by
        the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill,
        Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the
        captivating Panchat Dam. Revel in the embrace of comfort, relish
        delightful meals, and unwind in our verdant garden oasis. Your ideal
        retreat beckons, promising a harmonious blend of nature's beauty and
        heartfelt hospitality. Explore the hidden gems of Purulia, creating
        memories that linger long after your stay.</p>
        <address>
        Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
        Contact us: +91 9007062180
        </address>
        <a href="https://wa.link/at5ion" className="ui red button">Book Now</a>
      </div>
    </div>
  );
};

export default About;
