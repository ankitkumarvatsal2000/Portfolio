import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Link } from 'react-router-dom';
import About from './About';





const Navbar = (props) => {
    
   
    return (
        <>
        <div>
            <div class="flex justify-center bg-blue-900 text-white ">
    <nav class="self-center  w-full max-w-7xl  ">
        <div class="flex md:flex-row flex-col  justify-between items-center md:items-start">
            <h1 class=" py-4 text-2xl font-sans font-bold px-10 hover:text-red-300 animate-bounce">My Portfolio</h1>
            <ul class="flex justify-center my-4  items-center text-sm md:text-[18px] font-bold  md:px-10">
                <li
                    class= "hover:underline cursor-pointer  underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
                    <div>Home</div>
                </li>
                <li
                    class="hover:underline cursor-pointer underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
                  <Link to={'/about'}><div>About</div></Link> 
                </li>
                <li
                    class="hover:underline cursor-pointer underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
                  <Link to={'/resume'}> <div>Resume</div></Link>
                </li>
                <li
                    class="hover:underline cursor-pointer underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
                     <Link to={'/skills'}> <div>Skills</div></Link>
                </li>
                <li
                    class="hover:underline cursor-pointer underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
                    <Link to={'/projects'}> <div>Projects</div></Link>
                </li>
                
                <li
                    class="hover:underline cursor-pointer underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
                  <Link to={'/contact'}> <div>Contact</div></Link>
                </li>

            </ul>

        </div>
    </nav>
</div >
            
            <div class="flex justify-center  bg-blue-900 p-5 md:p-16 lg:p-40">
                <div class="flex flex-col justify-center  max-w-7xl  text-white">
                    <h1 class=" text-center lg:text-2xl font-medium tracking-wider ml-5 hover: transition-shadow animate-bounce ">Welcome to my Portfolio</h1>
                   
                    <div class="flex flex-col text-white mt-5">
                        <p class="text-[15px] font-semibold ml-36 mt-4">Hey ! I am  </p><br></br>
                        <h1 class=" text-center lg:text-[70px] font-semibold text-orange-500 animate-ping transition-all">Ankit Kumar</h1>

                        <p class=" animate-bounce text-center lg: m-auto text-xl mt-2 md:mt-10  tracking-wide">I am a &nbsp;<span className='text-orange-300 text-[20px] '>Web Developer & Web Designer </span></p>
                    </div>
                    
                    
                </div>
                
            </div>
           
           

        </div>
     
        </>
    )
}

export default Navbar;