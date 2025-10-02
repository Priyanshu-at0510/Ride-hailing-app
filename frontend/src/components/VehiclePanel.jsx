import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
            <h5 onClick={()=>{
              props.setVehiclePanelOpen(false);
            }} className='p-1 text-center absolute top-0 w-[93%]'><i className="ri-arrow-down-wide-line text-3xl text-gray-200 pt-14"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
            <div onClick={()=>{
              props.setConfirmRide(true);
            }} className='border-2 active:border-black  rounded-xl mb-2 flex p-3 items-center justify-between gap-3 w-full'>
              <img className='h-16 bg-white' src="https://imgs.search.brave.com/YR0fAoE-9GWLuVj_E5U4ouwwZ3Tz46yck3mh_U-irpI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9ibGFjay1zdHJl/dGNoLWxpbW91c2lu/ZV8xNDI2LTEzNTcw/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDA"/>
              <div className='w-1/2'>
                <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-fill"></i>4</span> </h4>
                <h5 className='font-medium text-sm'>2 min away</h5>
                <p className='font-normal text-xs text-gray-600'>Affordable,compact rides</p>
              </div>
              <h2 className='text-xl font-semibold '>₹199.30</h2>
            </div>
            <div onClick={()=>{
              props.setConfirmRide(true);
            }} className='border-2 active:border-black  rounded-xl mb-2 flex p-3 items-center justify-between gap-3 w-full'>
              <img className='h-16 bg-white' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8yYzdmYTE5NC1jOTU0LTQ5YjItOWM2ZC1hM2I4NjAxMzcwZjUucG5n"/>
              <div className='w-1/2'>
                <h4 className='font-medium text-base'>Moto <span><i className="ri-user-fill"></i>1</span> </h4>
                <h5 className='font-medium text-sm'>3 min away</h5>
                <p className='font-normal text-xs text-gray-600'>Affordable motorcycle rides</p>
              </div>
              <h2 className='text-xl font-semibold '>₹65.40</h2>
            </div>
            <div onClick={()=>{
              props.setConfirmRide(true);
            }} className='border-2 active:border-black  rounded-xl mb-2 flex p-3 items-center justify-between gap-3 w-full'>
              <img className='h-16 bg-white' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8xZGRiOGM1Ni0wMjA0LTRjZTQtODFjZS01NmExMWEwN2ZlOTgucG5n"/>
              <div className='w-1/2'>
                <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-fill"></i>3</span> </h4>
                <h5 className='font-medium text-sm'>3 min away</h5>
                <p className='font-normal text-xs text-gray-600'>Affordable Auto rides</p>
              </div>
              <h2 className='text-xl font-semibold '>₹119.97</h2>
            </div>
    </div>
  )
}

export default VehiclePanel