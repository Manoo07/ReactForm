import React from 'react'
import {useState} from 'react';
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast';
function LoginForm({setIsLoggedIn}) {
    const navigate = useNavigate();
    const[formData,setFormData]=useState({email:'',password:''});
    const [showPassword,setShowPassword] = useState(false);
    function changeHandler(event){
        setFormData(prevData=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }
    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Login successfull");
        navigate('/dashboard');
    }
  return (
    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6 '>
        <label className='w-full '>
            <p className='text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem]  '>Email Address<sup className='text-red-500'>*</sup></p>
        <input
        className='bg-zinc-800 border-b border-slate-600  rounded-[0.5rem] text-stone-900 w-full p-[12px]'
        required
        type='text'
        value={formData.email}
        formtype='login'
        onChange={changeHandler}
        placeholder='Enter Email ID'
        name='email'
        />
        </label>
        <label className='w-full relative'>
            <p className='text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem]'>Password<sup className='text-red-500'>*</sup></p>
        <input
        className='bg-zinc-800 border-b border-slate-600  rounded-[0.5rem] text-stone-900 w-full p-[12px]'
        required
        type={showPassword ?("text"):("password")}
        value={formData.password}
        onChange={changeHandler}
        placeholder='Enter Password'
        name='password'
        />
        <span className='absolute right-3 top-[38px] cursor-pointer' onClick={()=>{
            setShowPassword(prev=>!prev);
        }}>
            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
        </span>
        </label>
        <Link to='#'>
            <p className='text-xs mt-1 text-blue-100 flex flex-row-reverse'>
                Forgot Password
            </p>
        </Link>
        <button className='bg-yellow-500 rounded-[8px] text-black px-[12px] py-[8px]'>Sign In</button>
    </form>
  )
}

export default LoginForm