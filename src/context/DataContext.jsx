import axios from "axios";
import React, { createContext, useRef, useState } from "react";

export const weatherContext = createContext();

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const DataAPi = () => {
    setLoading(true);
    axios

      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=121d290669da4d343f2c0d10783475b9`
      )
      .then((res) => {
        setData(res.data);
        setHistory((prev) =>
          prev.includes(res.data.name) ? prev : [...prev, res.data.name]
        );
      })

      .catch((err) => {
        alert("City not found or API error");
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });

    setSearch("");
  };
  //   console.log(data);
  //   console.log(history);

  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <weatherContext.Provider
      value={{
        data,
        setData,
        DataAPi,
        setSearch,
        search,
        history,
        inputRef,
        handleClick,
        loading,
      }}
    >
      {children}
    </weatherContext.Provider>
  );
};

export default DataContextProvider;
