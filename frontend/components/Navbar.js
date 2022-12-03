import React from 'react';
import { useDarkMode } from "../hooks/useDarkMode";

const initialValue = {
  isDark: false
}

const Navbar = () => {
  
  const [isDark, setIsDark] = useDarkMode("dark", initialValue)
  const toggleMode = e => {
    e.preventDefault();
    setIsDark(!isDark);
  };
  console.log(isDark)
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={isDark ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
