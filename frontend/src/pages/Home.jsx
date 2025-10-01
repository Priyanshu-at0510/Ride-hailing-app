import React, { use, useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import { gsap } from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LocationSearchPanel';


const Home = () => {

  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef=useRef(null);
  const panelCloseRef=useRef(null);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const vehiclePanelRef=useRef(null);

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
          padding:24
          
        })
        gsap.to(panelCloseRef.current,{
          opacity:1,
        })
      }else{
        gsap.to(panelRef.current,{
          height:'0%',
          padding:0
          
        })
        gsap.to(panelCloseRef.current,{
          opacity:0,
        })
      }
      
  },[panelOpen])

  useGSAP(()=>{
    if(vehiclePanelOpen){
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(0)',
      })
    }
    else{
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(100%)',
      })
    }
  },[vehiclePanelOpen])
  return (
    <div className='relative h-screen overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"/>
      <div  className='h-screen w-screen'>
        {/* Image for Temporary use */}
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" />
      </div>
      <div className=' flex flex-col justify-end absolute h-screen w-full top-0'>
        <div className='h-[25%] p-6  bg-white relative'>
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
        <div ref={panelRef} className='h-0 bg-white'>
            <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanelOpen={setVehiclePanelOpen}/>
        </div>
      </div>
      <div ref={vehiclePanelRef} className='fixed z-10 bottom-0 px-3 py-10 bg-white w-full translate-y-full'>
            <h5 onClick={()=>{
              setVehiclePanelOpen(false);
            }} className='p-1 text-center absolute top-0 w-[93%]'><i className="ri-arrow-down-wide-line text-3xl text-gray-200 pt-14"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
            <div className='border-2 active:border-black  rounded-xl mb-2 flex p-3 items-center justify-between gap-3 w-full'>
              <img className='h-16 bg-white' src="https://imgs.search.brave.com/YR0fAoE-9GWLuVj_E5U4ouwwZ3Tz46yck3mh_U-irpI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9ibGFjay1zdHJl/dGNoLWxpbW91c2lu/ZV8xNDI2LTEzNTcw/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDA"/>
              <div className='w-1/2'>
                <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-fill"></i>4</span> </h4>
                <h5 className='font-medium text-sm'>2 min away</h5>
                <p className='font-normal text-xs text-gray-600'>Affordable,compact rides</p>
              </div>
              <h2 className='text-xl font-semibold '>₹199.30</h2>
            </div>
            <div className='border-2 active:border-black  rounded-xl mb-2 flex p-3 items-center justify-between gap-3 w-full'>
              <img className='h-16 bg-white' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8yYzdmYTE5NC1jOTU0LTQ5YjItOWM2ZC1hM2I4NjAxMzcwZjUucG5n"/>
              <div className='w-1/2'>
                <h4 className='font-medium text-base'>Moto <span><i className="ri-user-fill"></i>1</span> </h4>
                <h5 className='font-medium text-sm'>3 min away</h5>
                <p className='font-normal text-xs text-gray-600'>Affordable motorcycle rides</p>
              </div>
              <h2 className='text-xl font-semibold '>₹65.40</h2>
            </div>
            <div className='border-2 active:border-black  rounded-xl mb-2 flex p-3 items-center justify-between gap-3 w-full'>
              <img className='h-16 bg-white' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8xZGRiOGM1Ni0wMjA0LTRjZTQtODFjZS01NmExMWEwN2ZlOTgucG5n"/>
              <div className='w-1/2'>
                <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-fill"></i>3</span> </h4>
                <h5 className='font-medium text-sm'>3 min away</h5>
                <p className='font-normal text-xs text-gray-600'>Affordable Auto rides</p>
              </div>
              <h2 className='text-xl font-semibold '>₹119.97</h2>
            </div>
      </div>
    </div>
  )
}

export default Home