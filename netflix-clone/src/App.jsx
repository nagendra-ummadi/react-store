import React, { useEffect } from 'react';
import "./App.css";
import Home from "./Pages/Home/Home";
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Player from './Pages/Player/Player';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/ReactToastify.min.css'

const App = () => {
  const navigate = useNavigate()

  onAuthStateChanged(auth, async (user) =>{
    useEffect(()=>{
      if (user){
        console.log("Logged In")
        navigate('/')
      }
      else{
        console.log("Logged Out")
        navigate('/login')
      }
    },user)

  },[])

  return (
    <div>
      <ToastContainer 
    position="top-right" 
    autoClose={3000} 
    hideProgressBar={false} 
    newestOnTop={false} 
    closeOnClick 
    pauseOnFocusLoss 
    draggable 
    pauseOnHover 
/>

     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/player/:id" element={<Player />} />
     </Routes>
    </div>
  )
}

export default App