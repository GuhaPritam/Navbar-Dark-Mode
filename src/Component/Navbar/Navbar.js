import React, { useState } from 'react';
import Switch from '@mui/material/Switch';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState('dark');

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleMode = () => {
    if (mode === 'dark'){
      setMode('light')
    }
    else{
      setMode('dark')
    }
  };
  console.log(mode)

  return (
    <nav className={`${mode==='light'? 'bg-gray-400':'bg-black'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-white font-bold text-lg">Logo</a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className={`${mode==='light' ? 'text-black' : 'text-white'} px-3 py-2 rounded-md text-sm font-medium`}>Home</a>
              <a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
          <div className=''>
            <Switch defaultChecked onClick={toggleMode} />
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleNavbar} className="text-gray-300 hover:text-white inline-flex p-2 rounded-md focus:outline-none">
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
          <a href="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</a>
          <a href="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
