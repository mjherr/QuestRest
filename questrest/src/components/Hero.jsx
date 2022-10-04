import React from 'react';


const Hero = () => {
    const buttonStyling= `center-flex space-x-4 mr-2 font-bold bg-gradient-to-r from-[#2E5339] to-[#272755]
    text-[#FFF1C2] rounded-sm ring-2 ring-[#E85D04] px-6 py-2 
    hover:bg-[#E85D04]  hover:text-[#FFF1C2] hover:ring-[#FED9C3] mx-8 shadow-lg shadow-[#E85D04]`;
    
  return (
    <div className='text-[#FFF5C2]'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1 className='text-[#56008F] text-6xl text-shadow-[#E85D04] font-bold p-3'>
          Welcome to QuestRest
        </h1>
        <h2 className='md:text-7xl sm:text-5xl text-4xl font-bold md:py-6'>
          Stay motivated and on task
        </h2>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold text-[#EEFC57] py-4'>
            in a way that resonates with you
          </p>
        </div>
        <button type='submit' className={buttonStyling}>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;