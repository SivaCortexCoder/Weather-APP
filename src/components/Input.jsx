import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { weatherContext } from "../context/dataContext";

const Input = () => {
  const { DataAPi, setSearch, search, inputRef } = useContext(weatherContext);

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      DataAPi();
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={search}
        ref={inputRef}
        onKeyUp={handleKeyUp}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full shadow-md border-2 font-semibold text-white border-white p-4 pr-14 rounded-3xl bg-white/30 backdrop-blur-xl focus:outline-white placeholder:text-white"
        placeholder="Search for a City..."
      />
      <button
        onClick={DataAPi}
        className="absolute cursor-pointer right-3 top-3.5 text-xl text-white p-1"
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default Input;
