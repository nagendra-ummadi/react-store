import React from "react";
import "./TitleCards.css";
// import cards from "../../assets/cards/Cards_data";
import movies from "../../assets/cards/movies.json";
import axios from "axios";
import { useEffect } from "react";
import englishMovies from  "../../assets/cards/english_movies.json";
import teluguMovies from "../../assets/cards/telugu_movies.json";
import {Link} from "react-router-dom";

const TitleCards = ({ category, lang }) => {
  for (let i = englishMovies.length - 1; i > 0; i--) {
    // Generate random index
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at indices i and j
    const temp = englishMovies[i];
    englishMovies[i] = englishMovies[j];
    englishMovies[j] = temp;
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
        {
          (lang !== "english"
            ? teluguMovies.map((movie, idx) => {
                return (
                  <div className="card-item" key={idx}>
                    <img src={movie.Poster} alt="card-image" />
                    <p>{movie.Title}</p>
                  </div>
                );
              })
            : englishMovies.map((movie, idx) => {
                return (
                  <Link to={`/player/${movie.imdbid}`}>
                    <div className="card-item" key={idx}>
                    <img src={movie.image} alt="movie-card" />
                    <p>{movie.title}</p>
                  </div>
                  </Link>
                );
              }))
        }
      </div>
    </div>
  );
};
export default TitleCards;
