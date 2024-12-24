import React from 'react'
import "./Result.css"
import {useNavigate} from 'react-router-dom'
const Result = ({score, totalQuestions, name}) => {

  const navigate = useNavigate()
  return (
    <div className='result'>
     <div className='resultCard'>
     <h3>Welcome again {name}</h3>
     <h5>Thanks for taking the Tech quiz</h5>
     <h2>Your Score :: {score}/{totalQuestions}</h2>
     <button className='ui button primary' onClick={()=>{
      navigate("/")
     }}>Play again</button>
     </div>
    </div>
  )
}

export default Result