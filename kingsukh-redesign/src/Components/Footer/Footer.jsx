import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-col">
        <h1><a href="#home">Kingsukh <br/>Guest House</a></h1>
        <p>
          Discover a world of comfort, luxury, and adventure as you explore our
          curated selection of hotels, making every moment of your getaway truly
          extraordinary.
        </p>
        <a className="ui red button" href="https://wa.link/at5ion">
          Book Now
        </a>
      </div>

      <div className="footer-col">
        <h1>Quick Links</h1>
        <ul>
          <li><a href="">Browse Destinations</a></li>
          <li><a href="">Special Offers & Packages</a></li>
          <li><a href="">Room Types & Amenities</a></li>
          <li><a href="">Customer Reviews & Ratings</a></li>
          <li><a href="">Travel Tips & Guides</a></li>
        </ul>
      </div>

      <div className="footer-col">
        <h1>Our Services</h1>
        <ul>
          <li><a href="">Concierge Assistance</a></li>
          <li><a href="">Flexible Booking Options</a></li>
          <li><a href="">Airport Transfers</a></li>
          <li><a href="">Wellness & Recreation</a></li>
        </ul>
      </div>

      <div className="footer-col">
        <h1> CONTACT US</h1>
        <ul>
            <li><a href="">Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
            723156</a></li>
            <li><a href="">kkghosh0099@gmail.com </a></li>
            <li><a href="">+91 9007062180</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
