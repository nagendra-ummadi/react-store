// import React, { useEffect } from 'react';
// import "./App.css";
// import Home from "./Pages/Home/Home";
// import { Route, Routes, useNavigate } from 'react-router-dom';
// import Login from './Pages/Login/Login';
// import Player from './Pages/Player/Player';
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from './firebase';

// import { ToastContainer,toast} from 'react-toastify';
// import 'react-toastify/ReactToastify.min.css'

// const App = () => {
//   const navigate = useNavigate()

//   onAuthStateChanged(auth, async (user) =>{
//       if (user){
//         console.log("Logged In")
//         navigate('/')
//       }
//       else{
//         console.log("Logged Out")
//         navigate('/login')
//       }
//     },[])

//   return (
//     <div>
//       <ToastContainer 
//     position="top-right" 
//     autoClose={3000} 
//     hideProgressBar={false} 
//     newestOnTop={false} 
//     closeOnClick 
//     pauseOnFocusLoss 
//     draggable 
//     pauseOnHover 
// />

//      <Routes>
//       <Route path='/' element={<Home />}/>
//       <Route path="/login" element={<Login />} />
//       <Route path="/player/:id" element={<Player />} />
//      </Routes>
//     </div>
//   )
// }

// export default App

import React, { useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Player from "./Pages/Player/Player";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { Route, Routes, useNavigate } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const currentPath = window.location.pathname;

      if (user) {
        console.log("User is logged in");
        if (currentPath === "/login") {
          navigate("/"); // Only redirect to home if user is on login page
        }
      } else {
        console.log("User is logged out");
        if (currentPath !== "/login") {
          navigate("/login"); // Redirect to login if not already there
        }
      }
    });

    return () => unsubscribe();
  }, [navigate]);

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
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  );
};

export default App;
