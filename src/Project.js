import React from 'react'
import All_header from './All_header';
import { Link } from 'react-router-dom';

const Project = (props) => {
  return (
    <>
    
      <div className='fixed top-0 right-0 left-0'> <All_header /></div>
    <div className='flex flex-col items-center gap-7 mt-32'>
     <h1 className=' font-bold text-5xl'>Our Projects</h1>
     <p className='text-gray-400 font-bold '>There ara some small project. With the help of these projects, I have learnt my frontend developement fundamentals</p>
    </div>
    <div className='flex gap-4 mt-20' >
        <Link to={'/project_detail/to_do'}><img  className='w-[500px] h-[400px] pl-2' src={props.firstProject}></img></Link>
        <img className='w-[500px] h-[400px]' src={props.secondProject}></img>
        <img className='w-[500px] h-[400px] pr-2' src={props.thirdProject}></img>
       
  </div>
    </>
  )
}

export default Project;