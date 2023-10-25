import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CopyrightIcon from '@mui/icons-material/Copyright'
import All_header from './All_header';



const Contact = () => {
  return (

    <>
   <div className='fixed top-0 left-0 right-0  '> <All_header  /></div>
      <div className='pt-4 md:text-center'>
        <h1 className='text-6xl font-bold mt-80 md:mt-28'>Contact Me</h1>
        <p className='font-bold text-gray-400 mt-8'>Here is my all Contects Details, You can reach</p>
        <p className='font-bold text-gray-400'> out me</p>
      </div>
      <div className=' flex flex-col md:flex-row gap-8 md:gap-6 justify-center  '>
        <div className='shadow-lg rounded-md text-center w-[350px] md:w-[300px] '>
          <div className='w-[100px] h-[100px] rounded-[100px] bg-blue-900 m-auto'> <HomeRoundedIcon className='text-white mt-8 ' /></div>
          <h1 className='font-bold text-2xl'>Address</h1>
          <p className='mt-28 pb-2 text-gray-400 font-bold'>Noida (Uttar Pradesh)</p>
        </div>
        <div className='shadow-lg rounded-md text-center  w-[350px] md:w-[300px] '>
          <div className='w-[100px] h-[100px] rounded-[100px] bg-blue-900 m-auto'> <CallRoundedIcon className='text-white mt-8 ' /></div>
          <h1 className='font-bold text-2xl'>Contact  no.</h1>
          <p className='mt-24  text-gray-400 font-bold'>+919761416793</p>
          <p className=' text-gray-400 pb-2 font-bold'>+916398572277</p>
        </div>
        <div className='shadow-lg rounded-md text-center w-[350px] md:w-[300px] '>
          <div className='w-[100px] h-[100px] rounded-[100px] bg-blue-900 m-auto'> <MailRoundedIcon className='text-white mt-8 ' /></div>
          <h1 className='font-bold text-2xl'>Email Addess</h1>
          <p className='mt-24   text-gray-400 font-bold'>ankitkumarvatsal2000@gmail.com</p>
          <p className=' text-gray-400 font-bold pb-2'>chauhanankit7404@gmail.com</p>
        </div>
        <div className='shadow-lg rounded-lg text-center w-[350px] md:w-[300px] '>
          <div className='w-[100px] h-[100px] rounded-[100px] bg-blue-900 m-auto'><LinkedInIcon className='text-white mt-8 ' /></div>
          <h1 className='font-bold text-2xl'>LinkedIn Profile</h1>
          <p className='mt-24'><a className=' text-gray-400 font-bold' href='https://www.LinkedIn.com/in/ankit-kumar-635a62227'>https://www.LinkedIn.com/in/ankit-kumar-635a62227</a></p>

        </div>
      </div>
      <footer className='bg-black mt-12 pb-24 '>
        <div className=' flex-shrink-0 md:flex justify-center gap-64'>
        <div className=' w-[150px] md:w-[400px] '>
          <h1 className='text-white text-2xl mt-24 font-bold'>About</h1>
          <p className='mt-10 text-gray-400 font-bold'>A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
        </div>
        <div className='flex flex-col gap-3'>
          <h2 className='text-white text-2xl mt-24 font-bold'>Links</h2>
          <Link to={'/'}><div className=' mt-10 text-gray-400 font-bold'><ArrowForwardIcon />  Home</div></Link> 
          <Link to={'/about'}><div className='text-gray-400 font-bold'> <ArrowForwardIcon />About</div></Link> 
          <Link to={'/resume'}><div className='text-gray-400 font-bold'> <ArrowForwardIcon />Resume</div></Link> 
          <Link to={'/skills'}><div className='text-gray-400 font-bold'> <ArrowForwardIcon />Skills</div></Link> 
          <Link to={'/projects'}><div className='text-gray-400 font-bold'><ArrowForwardIcon />Projects</div></Link> 
          <Link to={'/contact'}><div className='text-gray-400 font-bold'> <ArrowForwardIcon />Contact</div></Link> 
        </div>
        <div >
          <h3 className='text-white text-2xl mt-24 font-bold '>Have a Questions?</h3>
          <p className='text-gray-400 font-bold mt-11 leading-5'><CallRoundedIcon />+9197614116793, &nbsp;+916398572277</p>
          <a className='text-gray-400 font-bold leading-5 ' href='mail to:ankitkumarvatsal2000@gmail.com'><MailRoundedIcon />  ankitkumarvatsal2000@gmail.com</a>
        </div>
        
        </div>
        <p className='text-gray-400 font-bold text-center mt-20'> <CopyrightIcon />Copyright ©2023 All rights reserved | This template is made with <FavoriteBorderIcon /> by Ankit Rajput</p>
      </footer>
      
    </>
  )
}

export default Contact;