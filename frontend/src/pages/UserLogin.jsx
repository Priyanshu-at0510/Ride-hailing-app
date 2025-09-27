import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { useState,useContext} from 'react'
import axios from 'axios';
import { UserDataContext } from '../context/userContext';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState([]);
  
  const navigate=useNavigate();
  const {user,setUser}=useContext(UserDataContext);



  const submitHandler= async (e)=>{
    e.preventDefault();
    const userData={
      email:email,
      password:password
    }
    const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData);
    if(response.status === 201 || response.status === 200){
      const data=response.data;
      setUser(data.user);
      localStorage.setItem('token',data.token);
      navigate('/home');
    }
    setPassword('');
    setEmail('');
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between '>
      <div>
        <img className='w-16 mb-10' src="https://imgs.search.brave.com/4QkAuWeE0Ceh8ii9S4ONWDN3WPbjcj3WhUlPcq6-5gg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTIwMTgtcHJlc2Vu/dC03MDB4Mzk0Lmpw/Zw" alt="" />
        <form onSubmit={(e)=>{
          submitHandler(e);
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
          <p className='text-center'>New here ? <Link to='/signup' className=' cursor-pointer text-blue-600'>Create new Account</Link></p>
          
        </form>
      </div>
      <div>
        <Link
          to='/captain-login'
          className=' flex items-center justify-center bg-[#10b461] text-[#fff] font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>
          SignIn as a Captain
        </Link>
      </div>
    </div>
  )
}
export default UserLogin