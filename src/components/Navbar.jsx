import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import image from "../assets/Logos/logo-border.png";

const Navbar = ({logout}) => {

  /* Buttons of the navbar for styling and functionality */
  const buttons = 'p-2 md:rounded-md md:overflow-hidden rounded-full flex flex-row gap-2 w-min md:w-full md:self-start self-center'
  return (
    /*Side Bar for navigation buttons */
    <nav className=" flex h-screen w-1/6 flex-col justify-between bg-blockNavy">
      <div className="flex flex-col gap-8  p-5 ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? ` bg-blockGold ${buttons}`
              : `bg-blockBlue hover:bg-blockSky ${buttons}`
          }
        >
          {/*Styling for the icon in the home button and navigation for where it goes  */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <p className="hidden md:block">Home</p>
        </NavLink>
        
        {/*Styling for the icon in the profile button and navigation for where it goes  */}
        <NavLink
          to="/Profile"
          className={({ isActive }) =>
            isActive
              ? ` bg-blockGold ${buttons}`
              : `bg-blockBlue hover:bg-blockSky ${buttons}`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <p className="hidden md:block">Profile</p>
          <title>Profile</title>
        </NavLink>
      </div>


      {/*Styling for the logout button at the bottom of the navigation bar */}
      <div className='flex flex-col justify-center'>
        <button className=' underline text-white hover:text-blockSky' onClick={logout}>Logout</button>
        <div className='flex flex-row justify-center my-5 overflow-hidden m-2'>
          
          <img src={image} alt="" className='h-auto w-auto'/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
