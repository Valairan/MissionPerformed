import React from "react";
import logo from "../public/logo.png";


const Header = () => {
  return (
    <header className="text-white flex-1 items-center justify-between px-6" style={{ height: '10vh' }}>
      <div className="flex items-center">
        <img 
          src={logo}
          alt="Logo" 
          className="w-auto h-full object-contain" 
        />
      </div>
    </header>
  );
};

export default Header;
