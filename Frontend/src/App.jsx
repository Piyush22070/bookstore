import React from 'react';

import Home from "./home/Home";
import {Routes,Route} from 'react-router-dom'
import Course from "./components/Course"
function App() {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
      </Routes>
    
  );
}

export default App;
