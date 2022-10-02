import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'
import loginImg from '../assets/placeholderHero.png'

export default function Login() {
  return (
    <div className='grid-cols-1 sm:grid-cols-2 w-full h-screen bg-[#000814]'>
        <div className='hidden sm:block'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={loginImg} alt="" />
        </div>
    
    <div className='bg-[#F7F2F8] flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-[#F8E5EE] p-4'>
            <h2 className='text-4xl font-bold text-[#6A040F] text-center py-6'>Login</h2>
            <div className='flex flex-col py-2'>
                <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><AiFillFacebook className='mr-2' /> Facebook</p>
                <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FcGoogle className='mr-2' /> Google</p>
            </div>
                <div className='flex flex-col mb-4'>
                    <label>Username</label>
                    <input className='border relative bg-[#F7FDAF] p-2' type="text" />
                </div>
                 <div className='flex flex-col py-2'>
                    <label>Password</label>
                    <input className='border relative bg-[#F7FDAF] p-2' type="password" />
                </div>
                <button className='border w-full my-5 py-2 mt-8 bg-[#EEFC57] hover:bg-[#FDC4CA] relative text-[#000814]'>Sign In</button>
                <div className='flex justify-between'>
                    <p className='flex items-center mt-2'><input className='mr-2' type="checkbox"  />Remember Me</p>
                    <p className='text-center mt-8'>Not a member? Sign up now</p>
                </div>
            </form>
        </div>
    </div>
  )
};