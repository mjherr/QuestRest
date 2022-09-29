import React, {useState} from 'react';
import {BsPerson} from 'react-icons/bs';
import {AiOutlineClose} from 'react-icons/ai';
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo);
  };

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-[#FFEEC2]'>
        <div>
            <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>QuestRest</h1>
        </div>
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>QuestBoard</li>
            <li>Rankings</li>
            <li>Settings</li>
        </ul>
        <div className='hidden md:flex'>
            <BsPerson size={20}/>
        </div>

        {/*Hamburger Menu*/}
        <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-[#000814]' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

        {/*Mobile Dropdown Menu*/}
        <div onClick={handleNav} className={nav ? 'absolute left-0 top-0 w-full bg-[#FFEEC2]/90 px-4 py-7 flex flex-col': 'absolute left-[-100%]'}>
            <ul>
                <h1>QuestRest</h1>
                <li className='border-b'>Home</li>
                <li className='border-b'>QuestBoard</li>
                <li className='border-b'>Rankings</li>
                <li className='border-b'>Settings</li>
                <div className='flex flex-col'>
            <button className='my-6'>Account</button>
                </div>
                <div className='flex justify-between my-6'>
                    <FaFacebook className='icon' />
                    <FaTwitter className='icon' />
                    <FaInstagram className='icon' />
                </div>
            </ul>
        </div>
    </div>
  );
};

export default Navbar