import { toHaveStyle } from '@testing-library/jest-dom/matchers';
import React from 'react'
import {useState} from 'react';
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast';

function SignupForm({setIsLoggedIn}) {
    const navigate = useNavigate();
    const [formData,setFormData] = useState({
        firstName:"",
        lastName:"",
        password:"",
        email:"",
        confirmPassword:"",
    })
    const[showPassword,setShowPassword]=useState(false);
    const[showPassword1,setShowPassword1]=useState(false);
    function changeHandler(event){
        setFormData((prevData)=>({
            ...prevData,
            [event.target.name]:event.target.value
        }))
    }
    function submitHandler(event){
        event.preventDefault();
        if(formData.password!=formData.confirmPassword){
            toast.error('Passwords do not match');
            return;
        }
            setIsLoggedIn(true);
            navigate('/login');
            toast.success('Account created');
    }
  return (
    <div className='w-[11/12] justify-between ' >
        <div className='flex bg-zinc-800 p-1 gap-z-1 my-6 rounded-full max-w-max'>
            <button >Student</button>
            <button>Instructor</button>
        </div>

        <form onSubmit={submitHandler} 
        className='flex flex-col w-full gap-y-4 mt-6'>
            <div className='flex gap-3'>
                <label className='w-full '>
                <p className='text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem]  '>First Name <sup className='text-red-500'>*</sup></p>
                <input 
                className='bg-zinc-800 border-b border-slate-600  rounded-[0.5rem] text-stone-900 w-full p-[12px]'
                required
                type='text'
                onChange={changeHandler}
                name='firstName'
                placeholder='Enter First Name'
                value={formData.firstName}
                />
            </label>
            <label className='w-full '>
                <p className='text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem]  '>Last Name <sup className='text-red-500'>*</sup></p>
                <input className='bg-zinc-800 border-b border-slate-600  rounded-[0.5rem] text-stone-900 w-full p-[12px]'
                required
                type='text'
                onChange={changeHandler}
                name='lastName'
                placeholder='Enter Last Name'
                value={formData.lastName}
                />
            </label>
            </div>
            <div>
            <label className='w-full '>
                <p className='text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem]  '>Email<sup className='text-red-500'>*</sup></p>
                <input className='bg-zinc-800 border-b border-slate-600  rounded-[0.5rem] text-stone-900 w-full p-[12px]'
                required
                type='email'
                onChange={changeHandler}
                name='email'
                placeholder='Enter Email'
                value={formData.email}
                />
            </label>
            </div>
            <div className='flex justify-between'>
            <label className='relative'>
                <p className='text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem]  '>Password <sup className='text-red-500'>*</sup></p>
                <input 
                className='bg-zinc-800 border-b border-slate-600  rounded-[0.5rem] text-stone-900 w-full p-[12px]'
                required
                type={!showPassword?("password"):("text")}
                onChange={changeHandler}
                name='password'
                placeholder='Enter Password'
                value={formData.password}
                />
                <span className='absolute right-3 top-[38px] cursor-pointer' onClick={()=>setShowPassword(prev=>!prev)}>
                    {showPassword?(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}
                </span>
            </label>
            <label className='relative'>
                <p className='text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem] '>Confirm Password<sup className='text-red-500'>*</sup></p>
                <input 
                className='bg-zinc-800 border-b border-slate-600  rounded-[0.5rem] text-stone-900 w-full p-[12px]'
                required
                type={!showPassword1?("password"):("text")}
                onChange={changeHandler}
                name='confirmPassword'
                placeholder='Enter Password'
                value={formData.confirmPassword}
                />
                <span className='absolute right-3 top-[38px] cursor-pointer' onClick={()=>setShowPassword1(prev=>!prev)}>
                    {showPassword1?(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}
                </span>
            </label>
            </div>
            <button className='bg-yellow-500 rounded-[8px] text-black px-[12px] py-[8px]'>
                Create Account
            </button>
        </form>
    </div>
  )
}

export default SignupForm;