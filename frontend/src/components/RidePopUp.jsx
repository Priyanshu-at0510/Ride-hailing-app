import React from 'react'

const RidePopUp = (props) => {
  return (
    <div>
        <h5 onClick={()=>{
            props.setConfirmRide(false);
          }} className='p-1 text-center absolute top-0 w-[93%]'><i className="ri-arrow-down-wide-line text-3xl text-gray-200 pt-14"></i></h5>
          <h3 className='text-3xl font-semibold mb-5'>New Ride Available!</h3>
          <div className='flex items-center justify-between bg-yellow-400 rounded-lg p-3 mt-4'>
            <div className='flex items-center gap-3 '>
                <img className='h-12 w-12 rounded-full object-cover' src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg" />
                <h2 className='text-xl font-medium'>Ishani</h2>
            </div>
            <div className='flex gap-2 items-center'>
                <i className="text-xl font-medium ri-pin-distance-line"></i>
                <h5 className='text-2xl font-semibold'>2.8 KM</h5>
            </div>
            
          </div>
          <div className='flex gap-2 flex-col justify-between items-center'>
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
              
            }} className=' mt-5 bg-green-600 text-white w-full p-3 rounded-lg font-medium'>Confirm</button>
            <button onClick={()=>{

            }} className=' mt-1 bg-gray-300 text-gray-700 w-full p-3 rounded-lg font-medium'>Ignore</button>
          </div>
    </div>
  )
}

export default RidePopUp;