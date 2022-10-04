import React, {useState} from 'react';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {AiOutlineClose, AiOutlineMenu,} from 'react-icons/ai';
import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';
// import {Link} from 'react-scroll';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    
    const handleNav = () => {
        setNav(!nav);
    
  };

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 max-w-[1240px] text-[#F3FD87]'>
        <div>
            <h1 onClick={handleNav} className='hidden:block'>QuestRest</h1>
        </div>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>QuestBoard</li>
            <li className='p-4'>Rankings</li>
            <li className='p-4'>Settings</li>
        </ul>
        <div className='hidden md:flex'>
            <BsFillPersonLinesFill size={20}/>
        </div>

        {/*Hamburger Menu*/}
        <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-[#F3FD87]' size={20} /> : <AiOutlineMenu size={20} />}
      </div>

        {/*Mobile Dropdown Menu*/}
        <div onClick={handleNav} className={nav ? 'absolute left-0 top-0 w-full bg-[#001D3D]/90 px-4 py-7 flex flex-col': 'absolute left-[-100%]'}>
            <ul>
                <h1>QuestRest</h1>
                <li className='border-b b-[#]'>Home</li>
                <li className='border-b b-[#]'>QuestBoard</li>
                <li className='border-b b-[#]'>Rankings</li>
                <li className='border-b b-[#]'>Settings</li>
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