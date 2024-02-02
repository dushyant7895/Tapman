import React, { useEffect, useState } from "react";

import axios from "axios";
import CityData from "./CityData";
const City = () => {
  
  const [data, setData] = useState([]);
  const [displayedData, setDisplayedData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  
    async function getData() {
      try {
        const API = "b4612262bc12941d047e5c0e62117f51";
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/group?id=1269750,1273294,1275004,1274746,1276704,1277333,1274866,1273874,1279233,1277034,1273855,1272502,1266101,1253986,1269515,1260073,1269734,1274747,1269320&appid=${API}&units=metric`
        );
        setData(response.data.list);
        //console.log(data);
      } catch (error) {
        console.error("Error is", error);
      }
    };

    const handleDisplayNextGroup = () => {
      const endIndex = startIndex + 5;
      setDisplayedData(data.slice(0, endIndex));
      setStartIndex(endIndex);
    };

  useEffect(() => {
    // Fetch weather data when the component mounts (optional)
    getData();
  }, []);

  return (
    <div name="MoreData" className="flex flex-col w-full justify-center bg-gradient-to-t from-gray-300 to-yellow-500">
      <div className="flex justify-center pt-20 pb-5">
        <h1 className="text-3xl">Weather of Cities</h1>
      </div>
      <div
        className="w-full grid grid-cols-3 sm:grid-cols-5 gap-2 
          text-center py-8 px-12 sm:px-0 md:px-10 text-green-800"
      >
        {displayedData.map((cityValue) => {
          return <CityData key={cityValue.id} city={cityValue} />;
        })}
      </div>
      <button
          onClick={handleDisplayNextGroup}
          className="text-white bg-gradient-to-b from-cyan-500 to-blue-500
                       px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
        >
          Check More
        </button>
        
    </div>
  );
};

export default City;
