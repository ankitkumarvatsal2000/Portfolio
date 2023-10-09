import React from 'react'
import All_header from './All_header';

const Skills = () => {
    return (
        <>
            <All_header className='' />
            <div className=' flex flex-col gap-7 w-[1000px] justify-center m-auto' >
                <h1 className='font-bold text-4xl text-center mt-20'>My Technical Skills</h1>
                <p className=  ' text-gray-400 font-bold text-center '>There are some my Technical skills in frontend web development journey . </p>
            </div>
            <div className='w-[1000px] m-auto '>
                <div className=' flex mt-20 gap-60 '>
                    <div className=''>
                        <div className='w-[150px] h-[150px] font-bold bg-blue-400 text-2xl rounded-full '><h1 className='text-center pt-12'>90%</h1></div>
                        <p className='font-bold ml-10 text-2xl'>HTML</p>
                    </div>
                    <div>
                        <div className='w-[150px] h-[150px] font-bold bg-blue-400 text-2xl rounded-full '><h1 className='text-center pt-12'>80%</h1></div>
                        <p className='font-bold ml-12 text-2xl'>CSS</p>
                    </div>
                    <div>
                        <div className='w-[150px] h-[150px] font-bold bg-blue-400 text-2xl rounded-full '><h1 className='text-center pt-12'>60%</h1></div>
                        <p className='font-bold ml-4 text-2xl'>JAVA SCRIPT</p>
                    </div>

                </div>
                <div className='w-[1000px] m-auto flex mt-20 gap-60'>
                    <div>
                        <div className='w-[150px] h-[150px] font-bold bg-blue-400 text-2xl rounded-full '><h1 className='text-center pt-12'>60%</h1></div>
                        <p className='font-bold ml-6 text-2xl'>REACT JS</p>
                    </div>
                    <div>
                        <div className='w-[150px] h-[150px] font-bold bg-blue-400 text-2xl rounded-full '><h1 className='text-center pt-12'>90%</h1></div>
                        <p className='font-bold ml-4 text-2xl'>Tailwind CSS</p>
                    </div>
                    <div>
                        <div className='w-[150px] h-[150px] font-bold bg-blue-400 text-2xl rounded-full '><h1 className='text-center pt-12'>50%</h1></div>
                        <p className='font-bold ml-6 text-2xl'>REDUX JS</p>
                    </div>


                </div >
                </div>
            </>
            )
}

            export default Skills;