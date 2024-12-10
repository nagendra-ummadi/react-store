import React from 'react'
import facebookIcon from '../../assets/facebook_icon.png'
import twitterIcon from '../../assets/twitter_icon.png'
import youtubeIcon from '../../assets/youtube_icon.png'
import instagramIcon from '../../assets/instagram_icon.png'
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-social">
        <p>Follow us:</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank"><img src={facebookIcon} alt="Facebook" /></a>
          <a href="https://instagram.com" target="_blank"><img src={instagramIcon} alt='Instagram' /></a>
          <a href="https://twitter.com" target="_blank"><img src={twitterIcon} alt='Twitter' /></a>
          <a href="https://youtube.com" target="_blank"><img src={youtubeIcon} alt='Youtube' /></a>
        </div>
      </div>
      <div className="footer-links">
        <ul>
          <li><a href="">FAQ</a></li>
          <li><a href="">Help Center</a></li>
          <li><a href="">Account</a></li>
          <li><a href="">Media Center</a></li>
          <li><a href="">Investor Relations</a></li>
          <li><a href="">Jobs</a></li>
          <li><a href="">Ways to Watch</a></li>
          <li><a href="">Terms of Use</a></li>
          <li><a href="">Privacy</a></li>
          <li><a href="">Cookie Preferences</a></li>
          <li><a href="">Corporate Information</a></li>
          <li><a href="">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-copyright">
        <p>© 2024 Netflix, Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;