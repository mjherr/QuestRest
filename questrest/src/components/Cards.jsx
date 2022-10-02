import React from 'react';
import {AiOutlineHeart, AiOutlineHourglass, AiOutlineCrown, } from 'react-icons/ai';

const Cards = () => {
    const buttonStyling= `center-flex space-x-4 mr-2 font-bold bg-gradient-to-r from-[#2E5339] to-[#272755]
    text-[#FFF1C2] rounded-sm ring-2 ring-[#E85D04] px-6 py-2 
    hover:bg-[#E85D04]  hover:text-[#001D3D] hover:ring-[#FED9C3] mx-8 shadow-lg shadow-indigo-300/50`;

  return (
    <div className='w-full py-[10rem] px-4 bg-[#000814]'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <button className='w-20 mx-auto mt-[-3rem] bg-transparent ' src={AiOutlineHeart} alt="" />
              <h2 className='text-2xl font-bold text-[#FFF1C2] text-center py-8'>Mood</h2>
              <div className='text-center font-medium'>
              <AiOutlineHeart color='bg-[#FFF1C2]' size='2.5rem' />
                  <p className='py-2 center border-b  text-[#FFF1C2] mx-8 mt-8'>Choose your task by mood</p>
              </div>
              <button type='submit' className={buttonStyling}>Begin</button>
          </div>
          <div className='w-full shadow-xl bg-[#000814] flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={AiOutlineHourglass} alt="" />
              <h2 className='text-2xl font-bold text-[#FFF1C2] text-center py-8'>Timed</h2>
              <div className='text-center font-medium'>
              <AiOutlineHourglass size='2.5rem' />
                  <p className='py-2 border-b text-[#FFF1C2] mx-8 mt-8'>Choose a task by the time you have</p>
              </div>
              <button type='submit' className={buttonStyling}>Begin</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-[#000814] ' src={AiOutlineCrown} alt="Rankings" />
              <h2 className='text-2xl font-bold text-[#FFF1C2] text-center py-8'>Rankings</h2>
              <div className='text-center font-medium'>
              <AiOutlineCrown  color='icon-[#FFF1C2]' size='2.5rem'/>
                  <p className='py-2 border-b  text-[#FFF1C2] mx-8 mt-8'>Check your progress</p>
              </div>
              <button type='submit' className={buttonStyling}>Begin</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;