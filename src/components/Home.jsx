import React,{useState} from "react";
import { CiSearch } from "react-icons/ci";
import { TiWeatherShower } from "react-icons/ti";
import { FaTemperatureLow } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
import axios from "axios";
const Home = () => {
  const[ city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  
  const handleInputChange = (e)=>{
    setCity(e.target.value);
  };
  const handleGetWeather = async()=>{
    try {
      const API='b4612262bc12941d047e5c0e62117f51';
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`);
      setWeatherData(response.data);
      console.log(weatherData);
      console.log(weatherData.main.temp);
      console.log(weatherData.wind.speed);
    } catch (error) {
      console.error('error fetching weather data',error)
    }
  }

  


  return (
    <div name= "Home" className="w-full h-full items-center">
      <div className="flex justify-center pt-20">
        <h1 className="text-2xl font-medium my-5 justify-center">
          Check Weather Report
        </h1>
      </div>
      <div className="  bg-gradient-to-b from-black to-yellow-500 w-full pt-5">
        <div className="flex flex-row justify-center gap-2 w-full h-15 px-2">
          <input
            type="text"
            value={city}
            placeholder="Enter City Name"
            onChange = {handleInputChange}
            className="p-3 bg-transparent bg-blue-200 border-2 rounded-md text-white 
                focus:outline-none w-full md:w-1/2 "
          />

          <button
            className="text-red-500 cursor-pointer hover:scale-105"
            onClick={handleGetWeather}
          >
            <CiSearch size={40} />
          </button>
          
        </div>
        <div className="flex text-blue-300 justify-center">
          <TiWeatherShower size={250} />
        </div>

        <div className="flex flex-row justify-center gap-20 md:gap-40 w-full ">
         
          
            <div className="flex items-center gap-3 font-medium text-2xl ">
            <FaTemperatureLow size={40} />
            {
              weatherData ? 
              (<h1>{weatherData.main.temp} °K</h1>)
              :
              (<h1>0 °K</h1>)
            }
              
            </div>
            <div className="flex items-center gap-3 font-medium text-2xl">
              <FaWind size={40} />
              {
              weatherData ? 
              (<h1>{weatherData.wind.speed} °km/h</h1>)
              :
              (<h1>0 °km/h</h1>)
            }
              
            </div>
        
         
          
        
        </div>
        
      </div>
    </div>
  );
};

export default Home;
