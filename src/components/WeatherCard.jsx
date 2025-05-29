import React, { useContext } from "react";
import DetailCard from "./DetailCard";
import { weatherContext } from "../context/dataContext";
import {
  FaSun,
  FaMapMarkerAlt,
  FaTint,
  FaWind,
  FaCompressArrowsAlt,
} from "react-icons/fa";
import sun from "../assets/drizzle-L5wjTzSq.png";

const WeatherCard = () => {
  const { data, history, setSearch, handleClick,loading } = useContext(weatherContext);

  const handleEdit = (index) => {
    const selectedPlace = history[index];
    setSearch(selectedPlace);
    handleClick();
  };

  return (
    <div className="text-white border-2 border-white shadow-md p-5 rounded-3xl bg-white/30 backdrop-blur-xl flex flex-col items-center space-y-6">
      {
        loading ? (
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white border-opacity-50" />
        <p className="text-lg font-semibold">Fetching weather data...</p>
      </div>
    )
        :(
          <>
           {data == "" ? (
        <img className="w-40" src={sun} alt="weather placeholder" />
      ) : (
        <>
          <div className="text-center space-y-2">
            <div className="flex items-center gap-2 justify-center flex-wrap slide-in-top">
              <p className="text-4xl text-yellow-300">
                <FaMapMarkerAlt />
              </p>
              <h1 className="font-bold  text-4xl md:text-5xl ">
                {data.name}
                <span className="text-2xl font-light md:text-3xl">
                  ,{data?.sys?.country}
                </span>
              </h1>
            </div>
            <p className="font-light text-2xl md:text-3xl">
              {data.weather?.[0]?.description}
            </p>
          </div>

          <div className="text-center flex  md:flex-row gap-3 items-center justify-center">
            <p className="text-yellow-300 text-5xl animate-spin">
              <FaSun />
            </p>
            <h1 className="font-semibold text-5xl md:text-6xl">
              {Math.round(data?.main?.temp - 273.15)}°C
            </h1>
          </div>
        </>
      )}
          </>
        )
      }

     
      <div className="flex w-full justify-between flex-wrap gap-4">
        <DetailCard
          title={"Humidity"}
          humidity={data?.main?.humidity}
          logo={<FaTint />}
          symbol={"%"}
        />
        <DetailCard
          title={"Pressure"}
          humidity={data?.main?.pressure}
          logo={<FaCompressArrowsAlt />}
          symbol={"hpa"}
        />
        <DetailCard
          title={"Wind Speed"}
          humidity={data?.wind?.speed}
          logo={<FaWind />}
          symbol={"m/s"}
        />
        
      </div>
      {history.length > 0 && (
        <>
          <h2>Recent Searches..</h2>
          <div className="flex gap-2 flex-wrap ">
            {history.map((item, idx) => (
              <button
                onClick={() => handleEdit(idx)}
                key={idx}
                className="cursor-pointer bg-white/10 backdrop-blur-2xl text-white px-3 py-1 rounded"
              >
                {item}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherCard;
