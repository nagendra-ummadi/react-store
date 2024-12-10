import React from 'react';
import "./App.css";
import Home from "./Pages/Home/Home";
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
const App = () => {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path="/login" element={<Login />} />
     </Routes>
    </div>
  )
}

export default App