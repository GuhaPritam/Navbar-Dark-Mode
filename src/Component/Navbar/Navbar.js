import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState('light');

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
    }
    else {
      setMode('light')
    }
  };
  console.log(mode)

  return (
    <nav className={`${mode === 'light' ? 'bg-gray-400' : 'bg-black'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-white font-bold text-lg">Logo</a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className={`${mode === 'light' ? 'text-black' : 'text-white'} px-3 py-2 rounded-md text-sm font-[700] text-[1rem]`}>Home</a>
              <a href="/" className={`${mode === 'light' ? 'text-black' : 'text-white'} px-3 py-2 rounded-md text-sm font-[700] text-[1rem]`}>About</a>
              <a href="/" className={`${mode === 'light' ? 'text-black' : 'text-white'} px-3 py-2 rounded-md text-sm font-[700] text-[1rem]`}>Services</a>
              <a href="/" className={`${mode === 'light' ? 'text-black' : 'text-white'} px-3 py-2 rounded-md text-sm font-[700] text-[1rem]`}>Contact</a>
            </div>
          </div>
          <div className=''>
            <MaterialUISwitch onClick={toggleMode} />
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
          <a href="/" className={`${mode === 'light' ? 'text-black' : 'text-white'} block px-3 py-2 rounded-md text-base font-[700] text-[1rem]`}>Home</a>
          <a href="/" className={`${mode === 'light' ? 'text-black' : 'text-white'} block px-3 py-2 rounded-md text-base font-[700] text-[1rem]`}>About</a>
          <a href="/" className={`${mode === 'light' ? 'text-black' : 'text-white'} block px-3 py-2 rounded-md text-base font-[700] text-[1rem]`}>Services</a>
          <a href="/" className={`${mode === 'light' ? 'text-black' : 'text-white'} block px-3 py-2 rounded-md text-base font-[700] text-[1rem]`}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
