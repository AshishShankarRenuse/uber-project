import React from 'react'

const LocationSearchPanel = (props) => {

  
  //sample array of locations
  const locations = [
    '10B, Near Kapoor\'s cafe, Sheryians Coding School, Bhopal',
    '20B, Near Kapoor\'s cafe, Sheryians Coding School, Bhopal',
    '30B, Near Kapoor\'s cafe, Sheryians Coding School, Bhopal',
    '40B, Near Kapoor\'s cafe, Sheryians Coding School, Bhopal',
  ]

  return (
    <div>
        {
          locations.map((location) => {
            return (
              <div onClick={()=>{
                props.setVehiclePanel(true)
                props.setPanelOpen(false)
              }} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
                <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                <h4 className='font-medium'>{location}</h4>
              </div>
            )
          })
        }

    </div>
  )
}

export default LocationSearchPanel
