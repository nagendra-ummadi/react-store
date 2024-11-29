import React, { useState } from "react";
import "./App.css"
import data from "./accordian.json"

const App = () => {
  const [selected,setSelected] = useState(null);
  const [multiple,setMultiSelected] = useState([]);
  const [enableMulti, setEnableMulti] = useState(false)

  function handleSelection(getId){
    // console.log(getId)
    setSelected(selected===getId?null:getId)
  }
  function handleMultiSelection(getId){
    setMultiSelected((multiple) =>{
      if (!multiple.includes(getId)){
        return ([...multiple,getId])
      }
      else{
        return  multiple.filter((id) => id !== getId);
      }
    })
  }
  return (
    <div className="container">
      <button onClick={()=> {
          setEnableMulti(!enableMulti)
          alert(`MultiSelection:: ${enableMulti?"Off":"On"}`)
        }}>Enable Multi Selection</button>
      <div className="accordian">
        
        {
          data.map((dataItem) => {
            return <div className="item" key={dataItem.id}>
              <div className="header" onClick={() => { 
                enableMulti? handleMultiSelection(dataItem.id):handleSelection(dataItem.id)}}> 
                <h4>{dataItem.question}</h4>
                <span>+</span>
              </div>
              <div className="content">
              {
               enableMulti?  multiple.map((ele) =>{
                return ele === dataItem.id? <span>{dataItem.answer}</span>:null
              }) : (selected== dataItem.id && <span>{dataItem.answer}</span>)
              }
              </div>
              </div>
          })
        }
      </div>
    </div>
  )
}
export default App;