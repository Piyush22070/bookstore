import React from 'react'
import list from"../../public//list.json";
import Navbar  from '../components/Navbar'
import Footer from '../components/Footer'
import Course from '../components/Course'
function Courses() {
  return (
    <div>
      <Navbar/>
      <div className='min-h-screen mt-20'>
        <Course/>
      </div>
      <Footer/>
    </div>
  )
}

export default Courses
