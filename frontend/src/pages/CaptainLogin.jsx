import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CaptainLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  const {captain,setCaptain}=React.useContext(CaptainDataContext);

  const submitHaldler=async (e)=>{
    e.preventDefault();
    const captain=({
      email:email,
      password,
    });
    const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,captain);
    if(response.status===200){
      const data=response.data;
      setCaptain(data.captain);
      localStorage.setItem('token',data.token);
      navigate('/captain-home');
    }
    setPassword('');
    setEmail('');
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between '>
      <div>
        <img className='w-16 mb-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s" alt="" />
        <form onSubmit={(e)=>{
          submitHaldler(e);
        }}>
          <h2 className='text-lg font-medium mb-2'>What's your email</h2>
          <input 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
          type="email" 
          required 
          placeholder='ishu@example.com' 
          />
          <h3 className='text-lg font-medium mb-2'>Enter password</h3>
          <input 
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
          className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
          type="password" 
          required 
          placeholder='password' 
          />
          <button 
            className='bg-[#111] text-[#fff] font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>
            Login
          </button>
          <p className='text-center'>Join a fleet ? <Link to='/captain-signup' className=' cursor-pointer text-blue-600'>Register as a Captain</Link></p>
          
        </form>
      </div>
      <div>
        <Link
          to='/login'
          className=' flex items-center justify-center bg-[#d5622d] text-[#fff] font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>
          SignIn as a User
        </Link>
      </div>
    </div>
  )
}

export default CaptainLogin