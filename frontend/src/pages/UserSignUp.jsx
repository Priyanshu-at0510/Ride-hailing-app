import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';
import {UserDataContext} from '../context/userContext';


const UserSignUp = () => {
  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState([]);

  const navigate=useNavigate();
  const {user,setUser}=React.useContext(UserDataContext);


  const submitHandler= async (e)=>{
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };

    const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser);
    if(response.status === 201 || response.status === 200){
      const data=response.data;
      setUser(data.user);
      localStorage.setItem('token',data.token);
      navigate('/home');
    }
    
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between '>
      <div>
        <img className='w-16 mb-10' src="https://imgs.search.brave.com/4QkAuWeE0Ceh8ii9S4ONWDN3WPbjcj3WhUlPcq6-5gg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTIwMTgtcHJlc2Vu/dC03MDB4Mzk0Lmpw/Zw" alt="" />
        <form onSubmit={(e)=>{
          submitHandler(e);
        }}>
          <h2 className='text-base font-medium mb-2'>What's your name</h2>
          <div className='flex gap-4 '>
            <input 
            value={firstName}
            onChange={((e)=>{setFirstName(e.target.value)})}
            className='bg-[#eeeeee] mb-6 w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm' 
            type="text" 
            required 
            placeholder='First name' 
            />
            <input 
            value={lastName}
            onChange={((e)=>{setLastName(e.target.value)})}
            className='bg-[#eeeeee] mb-6 w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm' 
            type="text" 
            required 
            placeholder='Last name' 
            />
          </div>
          
          <h2 className='text-base font-medium mb-2'>What's your email</h2>
          <input 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm' 
          type="email" 
          required 
          placeholder='ishu@example.com' 
          />
          <h3 className='text-base font-medium mb-2'>Set password</h3>
          <input 
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
          className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
          type="password" 
          required 
          placeholder='password' 
          />
          <button 
            className='bg-[#111] text-[#fff] font-semibold mb-3 rounded px-4 py-2 border w-full text-base placeholder:text-sm'>
            Create Account
          </button>
          <p className='text-center'>Already have a account ? <Link to='/login' className=' cursor-pointer text-blue-600'>Login here</Link></p>
          
        </form>
      </div>
      <div>
        <p className=' text-xs text-gray-500'>
          By procedding, you consent to get calls,whatsApp or SMS 
          messages automated by automated means,from Uber and its affliates to the email provided </p>
      </div>
    </div>
  )
}

export default UserSignUp