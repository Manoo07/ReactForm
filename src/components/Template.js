import React from 'react'
import Signup from '../pages/Signup';
import frameImage from '../assets/frame.png';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import {FcGoogle} from 'react-icons/fc'

const Template = ({title,desc1,desc2,image,formtype,setIsLoggedIn}) => {
  return (
    <div className='flex w-[11/12] justify-between  max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>
        <div className='w-[11/12] max-w-[450px] mx-0'>
            <h1 className='text-neutral-300 font-semibold text-[1.875rem] leading-[2.75rem]'>{title}</h1>
            <p className='text-[1.125rem] leading[1.625rem] mt-4 '>
                <span className='text-white'>{desc1}</span>
                <br/>
                <span className='text-cyan-200 italic'>{desc2}</span>
            </p>
            {
                formtype==='signup' ?
                (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
                (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
            }
            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-slate-700'></div>
                <p className=' text-slate-700 font-medium leading[1.375rem]'>OR</p>
                <div className='w-full h-[1px] bg-slate-700'></div>
            </div>
            <button className='flex w-full justify-center items-center rounded-[8px] font-medim text-white border border-slate-700 px-[12px] py-[8px] gap-x-2 mt-6'>
                <FcGoogle/>
                <p>
                Sign Up with Google
                </p>
            </button>
        </div>
        <div className='relative w-11/12 max-w-[450px] mx-auto '>
            <img src={frameImage} alt="Pattern" width={558} height={504} loading='lazy'/>
            <img src={image} className='absolute -top-4 right-4 ' alt="Students" width={558} height={504} loading='lazy'/>
        </div>
    </div>
  )
}

export default Template