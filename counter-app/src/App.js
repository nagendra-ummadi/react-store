import { useState } from "react";
import './App.css';

function App() {
  let [count,updateCount] = useState(0);
  let stock=10;
  return (
    <>
      <div className="Wrapper">
        <h1 id="header">Counter</h1>
        <button className="minus" disabled={count===0} onClick={()=>{
          if(count>0){
            updateCount(()=>{
              let h1 = document.getElementById("header")
              h1.style.color="red"
              return count-1
            })
          }
        }}>-</button>
        <h3>{count}</h3>
        <button className="plus" disabled={count===stock} onClick={()=>{
          if(count<stock){
            updateCount(()=>{
              let h1 = document.getElementById("header")
              h1.style.color="blue"
              return count+1
            })
          }
        }}>+</button>

      </div>
    </>
  )
}

export default App