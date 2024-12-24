import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import {useNavigate, useLocation} from 'react-router-dom'
import "./Quiz.css";
import Menu from "../Menu/Menu";
import Result from "../Result/Result";

const Quiz = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lock, setLock] = useState(false)
  const [score, setScore] = useState(0)
  const [finish, setFinish] = useState(false)

  const location = useLocation()
  const { selectedCategory, userName } = location.state || {}
  console.log(selectedCategory,userName)

  const navigate = useNavigate()

  const api_token = "uFnwdtlkJEb6sue45jC6icYFUIzcYZmZxrfL40At";
  

  const getAPI_Data = async () => {
    try {
      const response = await axios.get(
        `https://quizapi.io/api/v1/questions?apiKey=${api_token}&category=${selectedCategory}`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching quiz data:", error);
    }
  };

  useEffect(() => {
    getAPI_Data();
  }, []);

  // Guard clause: Wait until data is fetched
  if (!data.length) {
    return <div className="load">
      <i className="spinner loading icon"></i>
      Loading...</div>;
  }

  const currentQuestion = data[currentIndex];
  const answers = currentQuestion.answers;

  // Function to handle the Next button
  const handleNextQuestion = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
      const options = document.querySelectorAll(".option");
      options.forEach((option) => {
        option.classList.remove("correct", "wrong");
      });

      setLock(!lock)
    } else {
      alert("Quiz Completed!");
      // navigate("/end")
      setFinish(true);

    }
  };

  if (finish){
    return <Result score={score} totalQuestions = {data.length}  name={userName} />
  }

  const handleCorrectAnswer = (e,key) => {
    const answer = Object.entries(currentQuestion.correct_answers).filter((ele) =>{
      return ele[1] === 'true'
    })
    const correctAnswer = answer[0]
    if(lock === false){
      if(correctAnswer[0].replace("_correct","") === key){
        e.target.classList.add('correct')
        setScore(score+1)
      }
      else{
        e.target.classList.add('wrong')
      }
      setLock(true)
    }
  }

  return (
    <div className="quiz">
      <div className="quiz-body">
        <div className="question">
        {/* <h5>Welcome {userName}</h5> */}
          {`${currentIndex + 1}. ${currentQuestion.question}`}
        </div>
        <ol type="A" className="options">
          {Object.entries(answers).map(
            ([key, value]) =>
              value && ( // Render only if the answer is not null
                <li key={key} onClick={(e) => handleCorrectAnswer(e,key)} className="option">
                  {value}
                </li>
              )
          )}
        </ol>
        <button  className="ui blue button w-100" onClick={handleNextQuestion}>
          {currentIndex < data.length - 1 ? "Next" : "Finish"}
        </button>
      </div> 
    </div>
  );
};

export default Quiz;
