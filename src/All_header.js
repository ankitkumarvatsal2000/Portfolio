import React from 'react'
import { Link } from 'react-router-dom';

const All_header = () => {
  return (
    <div>            <div class="flex justify-center bg-blue-900 text-white ">
    <nav class="self-center w-full max-w-7xl  ">
        <div class="flex md:flex-row flex-col  justify-between items-center md:items-start">
            <h1 class=" py-4 text-2xl font-sans font-bold px-10">My Portfolio</h1>
            <ul class="flex justify-center my-4  items-center text-sm md:text-[18px] font-bold  md:px-10">
                <li
                    class="hover:underline cursor-pointer  underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
                    <Link to={'/'}><div>Home</div></Link>
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
                    <Link to={'/projects'}> <div>projects</div></Link>
                </li>
               
                <li
                    class="hover:underline cursor-pointer underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
                   <Link to={'/contact'}> <div>Contact</div></Link>
                </li>

            </ul>

        </div>
    </nav>
</div>

</div>
  )
}

export default All_header;