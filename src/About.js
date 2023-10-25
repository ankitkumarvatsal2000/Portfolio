import React from 'react'
import All_header from './All_header';
// const url = 'https://drive.google.com/file/d/1YmfVg255JsvaXpoP-jdUCmnSb_fT6OQ0/view?usp=drive_link';


const About = (props) => {
  
  
  const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = './Fresher Resume.pdf'
    link.download = 'resume_pdf.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };



  return (
    <>
      <div className='fixed top-0 right-0 left-0'> <All_header /></div>

      <div className='block lg:flex w-[600px] md:w-[1000px] m-auto items-center mt-24 pb-14'>
        <div className='flex-1'>
          <img className=' m-auto w-[700px] mt-80 md:mt-11 lg:w-[450px] h-[650px] rounded-lg' src={props.img}></img>
        </div>
        <div className=' lg:flex flex-col flex-1 '>
          <div className='flex flex-col gap-4 items-center mt-4'>
            <h1 className=' text-6xl font-bold'>About ME</h1>
            <p className='italic text-gray-400'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          </div>
          <div className=' flex items-start lg:flex flex-col mt-12 gap-6'>
            <h2 className=' font-medium '>Name:<span className='text-gray-400	'>Ankit Kumar</span></h2>
            <h2 className='font-medium '>Date of Birth:<span className='text-gray-400	'>06 April 2000</span></h2>
            <h2 className='font-medium'>Address:<span className='text-gray-400	' >Vil-Narayanpur Chhanga,Moradabad(Uttar Pradesh)</span></h2>
            <h2 className='font-medium'>Email:<span className='text-gray-400	'> ankitkumarvatsal2000@gmail.com</span></h2>
            <h2 className='font-medium'>Phone:<span className='text-gray-400	'>+919761416793</span></h2>
            <p className='font-bold text-3xl shadow-lg h-16 pl-7 rounded-lg'>Resume<button className='ml-20 text-green-600' onClick={downloadPdf}>Download PDF</button></p>
            {/* <a href="https://drive.google.com/file/d/1YmfVg255JsvaXpoP-jdUCmnSb_fT6OQ0/view?usp=drive_link" download="downloaded_pdf.pdf">Download PDF</a> */}
            
            
          </div>
        </div>
      </div>
    </>
  )
}

export default About;