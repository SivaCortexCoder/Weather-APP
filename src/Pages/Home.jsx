import React from "react";
import Input from "../components/Input";
import WeatherCard from "../components/WeatherCard";
import DataContextProvider from "../context/DataContext";

const Home = () => {
  return (
    <DataContextProvider>

      <div className="min-h-screen p-4 flex flex-col justify-center items-center  ">
        <div className="mb-5 slide-in-top">
            <h1 className='text-4xl font-bold text-center text-white '>WeatherNow ):</h1>
            <p className="text-center text-white ">"Live Weather at a Glance."</p>
        </div>
        
        <div className="w-full max-w-2xl space-y-5 fade-in">
            
          <Input />
          <WeatherCard />
        </div>
      </div>
    </DataContextProvider>
  );
};

export default Home;
