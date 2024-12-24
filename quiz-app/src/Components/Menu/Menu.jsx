import React from "react";
import "./Menu.css";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import { useState } from "react";
const Menu = () => {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("")
  const navigate = useNavigate()
  return (
    <div className="home">
      <div className="menu">
        <h2>Welcome to Tech Quiz</h2>
        <form className="user-input">
          <label htmlFor="name">Name</label>
          <input value={name} onChange={(e)=> {
            setName(e.target.value)
          }}
            type="text"
            className="ui input focus"
            placeholder="Enter Your good name"
          />
        </form>
        <div>
        <select value= {category} onChange={(e) => setCategory(e.target.value)} className="dropdown">
                <option value="all">----select----</option>
                <option value="React">React</option>
                <option value="Django">Django</option>
                <option value="nodeJS">Node JS</option>
                <option value="sql">SQL</option>
                <option value="Linux">Linux</option>
                <option value="DevOps">DevOps</option>
                <option value= "Docker">Docker</option>
                <option value="BASH">BASH</option>
                
            </select>
        </div>
        {console.log(category)}
        <div className="ui animated button primary" tabIndex={0}  onClick={() => {
                if (!category || category === "all") {
                  alert("Please select a category to start the quiz.");
                  return;
                }
                if (name === "" || name === null){
                  alert("Enter your good name please..")
                  return
                }
                // Navigate to the Quiz component and pass the selected category
                navigate("/quiz", {state: {selectedCategory: category, userName: name }});
            }}>
          <div className="visible content">
            Start Quiz
          </div>
          <div className="hidden content">Ready to start</div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
