import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div>
         <h5 onClick={()=>{
            props.setConfirmRide(false);
          }} className='p-1 text-center absolute top-0 w-[93%]'><i className="ri-arrow-down-wide-line text-3xl text-gray-200 pt-14"></i></h5>
          <h3 className='text-3xl font-semibold mb-5'>Confirm Your Ride</h3>
          <div className='flex gap-2 flex-col justify-between items-center'>
            <img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1646663215/assets/6e/e50c1b-2174-4c97-83a1-bfd4544689d0/original/uberX.png"/>
            <div className='w-full mt-5 '>
              <div className='flex gap-5 items-center p-3 border-b-2'>
                <i className="text-lg ri-map-pin-2-fill"></i>
                <div>
                  <h3 className='text-lg font-medium'>562/33-P</h3>
                  <p className='text-sm -mt-1 text-gray-600'>civil lines,prayagraj</p>
                </div>
              </div>
              <div className='flex gap-5 items-center p-3 border-b-2'>
                <i className="text-lg ri-map-pin-user-fill"></i>
                <div>
                  <h3 className='text-lg font-medium'>562/33-P</h3>
                  <p className='text-sm -mt-1 text-gray-600'>civil lines,prayagraj</p>
                </div>
              </div>
              <div className='flex gap-5 items-center p-3 '>
                <i className=" text-lg ri-money-rupee-circle-fill"></i>
                <div>
                  <h3 className='text-lg font-medium'>₹193.20</h3>
                  <p className='text-sm -mt-1 text-gray-600'>cash cash</p>
                </div>
              </div>
            </div>
            <button onClick={()=>{
              props.setVehicleFound(true);
              props.setConfirmRide(false);
            }} className=' mt-5 bg-green-600 text-white w-full p-3 rounded-lg font-medium'>Confirm</button>
          </div>
          
    </div>
  )
}

export default ConfirmRide