import React from 'react'

const LocationSearchPanel = ( props ) => {
    
    const locations = [
        "IIIT RANCHI Hostel,Khealgaon Housing Complex,Ranchi",
        "IIIT RANCHI Hostel,BSNL,Ranchi",
        "IIIT RANCHI Hostel,JUT campus,Ranchi",
        "IIIT RANCHI Hostel,Smart City,Ranchi",
    ];

    return (
        <div>
            {locations.map(function(location,index){
                return(
                    <div
                    key={index}
                    onClick={() => {
                        props.setVehiclePanelOpen(true)
                        props.setPanelOpen(false)
                    }}
                    className="flex border-2 p-3 rounded-2xl border-gray-100 active:border-black items-center justify-start gap-4 my-4">
                    <h2 className="bg-[#eee] h-8 flex justify-center w-12 items-center p-2 rounded-full">
                        <i className="ri-map-pin-line"></i>
                    </h2>
                    <h4 className="font-medium">{location}</h4>
                </div>
                )
            }
        )}
        </div>
    );
};

export default LocationSearchPanel;
