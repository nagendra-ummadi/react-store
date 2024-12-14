import React from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import heroBanner from "../../assets/hero_banner.jpg";
import heroTitle from "../../assets/hero_title.png";
import play from "../../assets/play_icon.png";
import info from "../../assets/info_icon.png";
import TitleCards from "../../Components/TitleCards/TitleCards"
import Footer from "../../Components/Footer/Footer";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={heroBanner} alt="banner" className="hero-banner" />
        <div className="hero-caption">
          <img src={heroTitle} alt="hero caption" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play} alt="Play icon" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info} alt="info icon" />
              More info
            </button>
          </div>
        </div>
      </div>
      <div className="start-card">
        <TitleCards category="Trending Now" lang="english"/>
      </div>
      <div className="more-cards">
      <TitleCards category="Recommended" lang="english"/>
      <TitleCards category="New and Popular" lang="english"/>
      <TitleCards category="Netflix Originals" lang="english"/>
      
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
