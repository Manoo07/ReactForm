import React from 'react'
import logo from '../assets/Logo.svg'
import {Link} from 'react-router-dom'
import {toast} from 'react-hot-toast';
function Navbar(props) {
    let isLoggin = props.isLoggin;
    let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
        <Link to='/' >
            <img src={logo} alt='logo' width={160} height={32} loading='lazy'/>
        </Link>
        <nav className=''>
            <ul className='text-white flex gap-6'>
                <li>
                    <Link to ='/'>Home</Link>
                </li>
                <li>
                    <Link to ='/'>About Us</Link>
                </li>
                <li>
                    <Link to ='/'>Contact Us</Link>
                </li>
            </ul>
        </nav>
        <div className='flex items-center gap-4 '>
            { !isLoggin &&
                <Link to='/login'>
                    <button className='bg-gray-800 text-white py-[8px] px-[12px]
                     rounded-[8px] border-gray-700'>
                        Log in
                    </button>
                </Link>
            }
              { !isLoggin &&
                <Link to='/signup' onClick={()=>{
                    
                }}>
                    <button className='bg-gray-800 text-white py-[8px] px-[12px]
                     rounded-[8px] border-gray-700'>
                        Sign up
                    </button>
                </Link>
            }
              { isLoggin &&
                <Link to='/'>
                    <button className='bg-gray-800 text-white py-[8px] px-[12px]
                     rounded-[8px] border-gray-700' onClick={()=>{
                        setIsLoggedIn(false);
                        toast.success("Logged out");
                    }}>
                        Log out
                    </button>
                </Link>
            }
              { isLoggin &&
                <Link to='/dashboard'>
                    <button className='bg-gray-900 text-white py-[8px] px-[12px]
                     rounded-[8px] border-gray-600'>
                        Dashboard
                    </button>
                </Link>
            }
        </div>
    </div>
  )
}

export default Navbar;