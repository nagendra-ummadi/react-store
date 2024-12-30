import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div id="contact">
      <div className="contact-section">
        <div className="info-section">
          <h1>Contact Info</h1>
          <ul>
            <li>
              <i class="map marker alternate icon"></i>
              Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
            </li>
            <li>
              <i className="mail icon"></i>kkghosh0099@gmail.com
            </li>
            <li>
              <i className="phone icon"></i>+91 9007062180
            </li>
          </ul>
            <ul className="social-icons">
              <li>
                <i class="facebook f icon"></i>
              </li>
              <li>
                <i class="instagram icon"></i>
              </li>
              <li>
                <i class="twitter icon"></i>
              </li>
              <li>
                <i class="linkedin icon"></i>
              </li>
            </ul>
        </div>
        <div className="send-message">
          <h1>Send Message</h1>
          <form>
            <input name="first_name" type="text" placeholder="First name" />
            <input type="text" name="last_name" placeholder="Last name" />
            <input type="email" name="email" placeholder="Enter your Email" />
            <input type="text" name="mobile" placeholder="Mobile Number" />
            <textarea placeholder="Message" rows="5"></textarea>
          </form>
          <div className="ui animated  red button" tabIndex="0">
              <div className="visible content">Send Message</div>
              <div className="hidden content">
                <i className="paper plane icon"></i>
              </div>
            </div>
        </div>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5017351225647!2d86.85721547510981!3d23.586332378782714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1705088034844!5m2!1sen!2sin"
          style={{ width: "100%", height: "500px" }}
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
