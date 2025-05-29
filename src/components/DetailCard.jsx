import React from "react";

const DetailCard = ({ title, humidity, logo, symbol }) => {
  return (
    <div className="text-white border flex-grow border-white px-4 py-3 rounded-3xl  bg-white/10 backdrop-blur-2xl text-center ">
      <div className="flex items-center gap-2 justify-center">
        <p className="hover:-translate-y-1 transition ease-in-out">{logo}</p>
        <p className="text-2xl font-light ">{title}</p>
      </div>

      <h3 className="text-2xl font-bold">
        {humidity} {humidity ? symbol : ""}
      </h3>
    </div>
  );
};

export default DetailCard;
