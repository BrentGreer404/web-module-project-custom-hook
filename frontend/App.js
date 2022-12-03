import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDarkMode } from "./hooks/useDarkMode";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

const initialValue = {
  isDark: false
}

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [isDark, setIsDark] = useDarkMode("dark", initialValue)

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className={isDark ? "dark-mode App" : "App"}>
      <Navbar darkMode={isDark} setDarkMode={setIsDark} />
      <Charts coinData={coinData} />
    </div>
  );
};

export default App;
