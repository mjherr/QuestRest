import React from 'react';


const Hero = () => {
  return (
    <div className='text-[#FFF1C2]'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1 className='text-[#885091] text-6xl font-bold p-3'>
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
        <button className='bg-gradient-to-r from-bg-[#6A040F] to-bg-[#370617] .text-[#FFEEC2] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#F7FDAF]'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;