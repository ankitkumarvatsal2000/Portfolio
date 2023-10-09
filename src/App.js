
import React from 'react'
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';


import Resume from './Resume';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Project from './Project';
import Skills from './Skills';

import ToDo from './ToDo';




const App = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
          
        <Route path='/' element={<Navbar  />} />
          <Route path='/about' element={<About img={'./ankit.jpg'} />} />
          <Route path='/resume/' element={<Resume />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Project firstProject ={'./ToDo.png'} secondProject={'./portfolioimg.jpg'} thirdProject={'./registration.img.jpg'} />} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/project_detail/to_do' element={<ToDo />} />

        </Routes>
      </BrowserRouter> 
    </>
  )

  }
export default App;

