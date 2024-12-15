import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import englishMovies from "../../assets/cards/english_movies.json";
// import teluguMovies from "../../assets/cards/telugu_movies.json";
import backArrowIcon from "../../assets/back_arrow_icon.png";
import "./Player.css";

const Player = () => {
  const {id} = useParams();
  const navigate = useNavigate()

  // Find the movie based on the imdbid
  const movie = englishMovies.find((movie) => movie.imdbid === id)
  console.log(movie)
  if (!movie) {
    return <h4>Movie not found!</h4>;
  }

  return (
   <>
   
    <div className="player">
    <img src={backArrowIcon} alt="Go back" className="backIcon" onClick={()=> navigate("/")}/>
      <h4>Now Playing: {movie.title}</h4>
      <iframe
        src={movie.imdb_link}
        width="100%"
        height="600px"
        allowFullScreen
      ></iframe>
    </div>
    <div className="details">
    <h6>Year: {movie.year}</h6>
    <h6>Genre: {movie.genre}</h6>
  </div>
   </>
  );
};
 
export default Player;
