import React from 'react';
import {BsPerson} from 'react-icons/bs';
// import {AiOutlineClose} from 'react-icons/ai';
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-20 px-4'>
        <div>
            <h1>QuestRest</h1>
        </div>
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>QuestBoard</li>
            <li>Rankings</li>
            <li>Settings</li>
        </ul>
        <div className='hidden md:flex'><BsPerson size={20}/></div>

        {/*Hamburger Menu*/}
        <div className='md:hidden'>
            <HiOutlineMenuAlt4 size={20} />
        </div>

        {/*Mobile Dropdown Menu*/}
        <div className='absolute left-0 top-0 w-full bg-[#FFEEC2]/90 px-4 py-7 flex flex-col'>
            <ul>
                <h1>QuestRest</h1>
                <li>Home</li>
                <li>QuestBoard</li>
                <li>Rankings</li>
                <li>Settings</li>
                <div>
                    <button>Account</button>
                </div>
                <div className='absolute'>
                    <FaFacebook className='icon' />
                    <FaTwitter className='icon' />
                    <FaInstagram className='icon' />
                </div>
            </ul>
        </div>
    </div>
  )
}

export default Navbar