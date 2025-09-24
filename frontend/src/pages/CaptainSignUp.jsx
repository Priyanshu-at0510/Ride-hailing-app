import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CaptainSignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [captainData, setCaptainData] = useState([]);

  const submitHaldler=(e)=>{
    e.preventDefault();
    const data = {
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    };
    setCaptainData(data);
    setEmail('');
    setPassword('');
    setFirstname('');
    setLastname('');
  }
  return (
    <div className='py-5 px-5 h-screen flex flex-col justify-between '>
      <div>
        <img className='w-16 mb-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s" alt="" />
        <form onSubmit={(e)=>{
          submitHaldler(e);
        }}>
          <h2 className='text-base font-medium mb-2'>What's our captain's name</h2>
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
          
          <h2 className='text-base font-medium mb-2'>What's our captain's email</h2>
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
            SignUp
          </button>
          <p className='text-center'>Already have a account ? <Link to='/captain-login' className=' cursor-pointer text-blue-600'>Login here</Link></p>
          
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

export default CaptainSignUp