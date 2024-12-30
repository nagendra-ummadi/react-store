import React from "react";
import "./Rooms.css";
import roomsData from "../../assets/rooms_data.json";

const Rooms = () => {
  return (
    <div id="rooms">
      <h3>Our living Rooms</h3>
      <h1>The Most Memorable Rest Time Starts Here</h1>
      <div className="room-cards">
      {roomsData.map((room) => {
        return (
          <div key={room.id} className="room-card">
              <img src={room.image} alt="room image" className="room-image" />
            <div className="room-description">
              <h4>{room.roomTitle}</h4>
              <p>{room.description}</p>
              <h4>Starts from {room.minPrice} /night</h4>
              <a href="https://wa.link/at5ion" className="ui red button">
                Book now
              </a>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Rooms;
