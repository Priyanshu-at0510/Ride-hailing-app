import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CaptainSignUp = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const {captain,setCaptain}=React.useContext(CaptainDataContext);

  const[vehiclePlate,setVehiclePlate]=useState('');
  const[vehicleType,setVehicleType]=useState('');
  const[vehicleColor,setVehicleColor]=useState(''); 
  const[vehicleCapacity,setVehicleCapacity]=useState('');

  const submitHaldler=async (e)=>{
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle:{
        color:vehicleColor,
        plate:vehiclePlate,
        capacity:vehicleCapacity,
        vehicleType:vehicleType
      }
    };

    const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,captainData);
    if(response.status===201){
      const data=response.data;
      setCaptain(data.captain);
      localStorage.setItem('token',data.token);
      navigate('/captain-home');
    }

    
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleCapacity('');
    setVehicleType('');
    
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
          <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>

          <button 
            className='bg-[#111] text-[#fff] font-semibold mb-3 rounded px-4 py-2 border w-full text-base placeholder:text-sm'>
            Create Captain Account
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