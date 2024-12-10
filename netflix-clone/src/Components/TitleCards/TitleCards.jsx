import React from "react";
import "./TitleCards.css";
import cards from "../../assets/cards/Cards_data";
import movies from "../../assets/cards/movies.json"

const TitleCards = ({category}) => {
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
        {
          movies.map((movie,idx)=>{
            return (
              <div className="card-item" key={idx}>
                <img src={movie.Poster} alt="card-image" />
                <p>{movie.Title}</p>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default TitleCards;
