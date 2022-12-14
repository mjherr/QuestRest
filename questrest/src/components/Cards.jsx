import React from 'react';
import {AiOutlineHeart, AiOutlineHourglass, AiOutlineCrown} from 'react-icons/ai';

const Cards = () => {
    const buttonStyling= `center-flex space-x-4 mr-2 font-bold bg-gradient-to-r from-[#2E5339] to-[#272755]
    text-[#FFF1C2] rounded-sm ring-2 ring-[#E85D04] px-6 py-2 
    hover:bg-[#E85D04]  hover:text-[#FFF1C2] hover:ring-[#FED9C3] mx-8 shadow-lg shadow-[#E85D04]`;

  return (
    <div className='w-full shadow-xl flex flex-col p-4 my-4 bg-[#EDE0F6]'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl  bg-[#001D3D] flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <button className='w-20 mx-auto mt-[-3rem] bg-transparent' src={AiOutlineHeart} alt="/" />
              <h2 className='text-2xl font-bold text-[#F3FD87] text-center py-8'>Mood</h2>
              <div className='text-center font-medium'>
              <AiOutlineHeart color='#E85D04' size='2.5rem' />
                  <p className='py-2 border-b  text-[#FFF1C2] mx-8 mt-8'>Choose your task by mood</p>
              </div>
              <button type='submit' className={buttonStyling}>Begin</button>
          </div>
          <div className='w-full shadow-xl bg-[#001D3D] flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={AiOutlineHourglass} alt="/" />
              <h2 className='text-2xl font-bold text-[#F3FD87] text-center py-8'>Timed</h2>
              <div className='text-center font-medium'>
              <AiOutlineHourglass color='#E85D04' size='2.5rem' />
                  <p className='py-2 border-b text-[#FFF1C2] mx-8 mt-8'>Choose a task by the time you have</p>
              </div>
              <button type='submit' className={buttonStyling}>Begin</button>
          </div>
          <div className='w-full shadow-xl  bg-[#001D3D] flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <div className='w-20 mx-auto mt-[-3rem] bg-transparent' src={AiOutlineCrown} alt="/" />
              <h2 className='text-2xl font-bold text-[#F3FD87] text-center py-8'>Rankings</h2>
              <div className='text-center font-medium'>
              <AiOutlineCrown color='#E85D04' size='2.5rem'/>
                  <p className='py-2 border-b  text-[#FFF1C2] mx-8 mt-8'>Check your progress</p>
              </div>
              <button type='submit' className={buttonStyling}>Begin</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;