import React from 'react'
import { useParams } from 'react-router-dom';
import All_header from './All_header';

const ToDo = () => {
    
  return (
    <>
    <div className='fixed top-0 right-0 left-0'> <All_header /></div>
    <div className='w-[1000px] m-auto flex flex-col gap-7 shadow-lg rounded-lg pb-24 pl-9 mt-5'>
  
        <h1 className='text-center text-4xl font-bold pt-14 '>My ToDo List </h1>
        <h2 className='text-2xl font-bold '>Project Title:--<span className=''>ToDo List Application</span></h2>
        <h3  className='text-lg font-bold '>Technology Used:--<span>React.js, HTML5, CSS3, javaScript</span></h3>
        <span className='font-bold text-2xl'>Description:--</span><p className='text-gray-400 font-bold'>Developed a web-based To-Do List application using React.js, allowing users to create, manage, and prioritize tasks for improved productivity.
Implemented a user-friendly interface with features including task creation, deletion, completion tracking, and deadline setting.
Integrated local storage for persistent data, ensuring that tasks remain saved even after the browser is closed.
Utilized CSS for styling, creating an intuitive and visually appealing user experience.
Employed Git for version control and collaborated with a team of three developers to ensure smooth project workflow.

</p>
<h4 className='font-bold text-2xl '>Achievements:</h4>
<p className='text-gray-400 font-bold'>1:-Streamlined task management for personal and team projects, resulting in a 30% increase in overall productivity.</p>
 <p className='text-gray-400 font-bold'>2:-Received positive user feedback for the intuitive interface and seamless task tracking functionality.</p>
    </div>
    </>
  )
 
}

export default ToDo;