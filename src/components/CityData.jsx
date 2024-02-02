import React from 'react'
import { FaTemperatureLow } from "react-icons/fa";
import { FaWind } from "react-icons/fa";

const CityData = ({city}) => {
  return (
    
        <div
          className="hadow-md hover:scale-105 duration-500 py-2 
              rounded-lg border border-black "
        >
          <div>
            <h1>{city.name}</h1>
          </div>
          <div className="flex flex-row pt-4 justify-center gap-2">
            <FaTemperatureLow />
            <h1>{city.main.temp} °C</h1>
          </div>
          <div className="flex flex-row pt-4 justify-center gap-2">
            <FaWind />
            <h1>{city.wind.speed} km/h</h1>
          </div>
        </div>
    
  )
}

export default CityData