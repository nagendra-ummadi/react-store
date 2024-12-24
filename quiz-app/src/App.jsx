
import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Menu from "./Components/Menu/Menu";
import Quiz from "./Components/Quiz/Quiz"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/quiz' element={<Quiz />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App