import React, { use, useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import { gsap } from 'gsap';
import 'remixicon/fonts/remixicon.css';


const Home = () => {

  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef=useRef(null);
  const panelCloseRef=useRef(null);

  const submitHandler=((e)=>{
    e.preventDefault();
    setPickup('');
    setDestination('');
    setPanelOpen(false);

  })
  useGSAP(()=>{
      if(panelOpen){
        gsap.to(panelRef.current,{
          height:'70%',
          opacity:1
        })
        gsap.to(panelCloseRef.current,{
          opacity:1,
        })
      }else{
        gsap.to(panelRef.current,{
          height:'0%',
          opacity:1
        })
        gsap.to(panelCloseRef.current,{
          opacity:0,
        })
      }
      
  },[panelOpen])
  return (
    <div className='relative h-screen'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"/>
      <div className='h-screen w-screen'>
        {/* Image for Temporary use */}
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" />
      </div>
      <div className=' flex flex-col justify-end absolute h-screen w-full top-0'>
        <div className='h-[30%] p-6  bg-white relative'>
          <h5 
            ref={panelCloseRef}
            onClick={()=>{
              setPanelOpen(!panelOpen);
            }}
            className='absolute opacity-0  right-6 top-6 text-2xl'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e)=>{
            submitHandler(e);
          }}>
            <div className="line absolute h-14 w-1 top-[41%] left-[12%] bg-gray-900 rounded-full"></div>
            <input 
            onClick={()=>{
              setPanelOpen(true);
            }}
            value={pickup}
            onChange={(e)=>setPickup(e.target.value)}
            className='bg-[#eee] px-12 py-2 rounded-lg w-full mt-5 text-lg' 
            type='text' 
            placeholder='Add a Pickup-Location'/>
            <input 
            onClick={()=>{
              setPanelOpen(true);
            }}
            value={destination}
            onChange={(e)=>setDestination(e.target.value)}
            className='bg-[#eee] px-12 py-2 rounded-lg w-full mt-3 text-lg' 
            type="text" 
            placeholder='Enter your destination' />
          </form>
        </div>
        <div ref={panelRef} className='h-[0] opacity-0 bg-red-500'>

        </div>
      </div>
    </div>
  )
}

export default Home