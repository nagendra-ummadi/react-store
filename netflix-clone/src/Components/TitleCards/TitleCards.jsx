import React from "react";
import "./TitleCards.css";
// import cards from "../../assets/cards/Cards_data";
import movies from "../../assets/cards/movies.json";
import axios from "axios";
import { useEffect } from "react";

const TitleCards = ({ category }) => {
  const config = {
    "Content-Type": "application/json",
    "trakt-api-version": "2",
    "trakt-api-key":
      "8102fb7f971471830808d7895374a0048ef3d212d1113824bf7f06f87d601744",
  };
  var request = new XMLHttpRequest();

  request.open("GET", "https://api.trakt.tv/movies/popular");

  request.setRequestHeader("Content-Type", "application/json");
  request.setRequestHeader("trakt-api-version", "2");
  request.setRequestHeader(
    "trakt-api-key",
    "8102fb7f971471830808d7895374a0048ef3d212d1113824bf7f06f87d601744"
  );

  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      // console.log("Status:", this.status);
      // console.log("Headers:", this.getAllResponseHeaders());
      // console.log("Body:", this.responseText);
      const data = this.responseText
      console.log(data)
    }
  };

  request.send();
  for (let i = movies.length - 1; i > 0; i--) {
    // Generate random index
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at indices i and j
    const temp = movies[i];
    movies[i] = movies[j];
    movies[j] = temp;
  }

  return (
    <div className="titlecards">
      <h4>{category}</h4>
      <div className="cards-list">
        {/* {cards.map((card, idx) => {
          return (
            <div className="card-item" key={idx}>
              <img src={card.image} alt="card-image" />
            </div>
          );
        })
        } */}
        {movies.map((movie, idx) => {
          return (
            <div className="card-item" key={idx}>
              <img src={movie.Poster} alt="card-image" />
              <p>{movie.Title}</p>
            </div>
          );
        })}
        
      </div>
    </div>
  );
};

export default TitleCards;
