import React from 'react';
import { useAuth } from '../../Frontend/context/Authprovider.jsx';
import Home from "./home/Home";
import {Routes,Route, Navigate} from 'react-router-dom'
import Courses from './courses/Courses';
import Signup from './components/Signup';
import toast, { Toaster } from 'react-hot-toast';
function App() {
  const[authuser,setAuthuser]=useAuth()
console.log(authuser);

  return (
<div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authuser?<Courses />:<Navigate to="/signup"/>} />
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <Toaster />
      </div>
  );
}

export default App;
