import React, { useState } from "react";
import Logo from '../images/logo black.svg';
import InputWithIcon from './InputWithIcon';
import {Link} from 'react-router-dom'

function Navbar2(props) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-transparent">
      <div className="container mx-auto flex justify-between items-center relative">
        <div className="text-white">
          <Link to="/HomePage" className="text-white hover:text-gray-300">
            <img src={Logo} className='flex h-20 w-30 bg-transparent ml-0' alt="Logo" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6 text-black mt-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop navigation links */}
        <div className="justify-between items-stretch self-center gap-5 my-auto max-md:max-w-full max-md:flex-wrap max-md:justify-center hidden md:flex">
          {/* desktop navigation links here */}
          <div className="text-zinc-500 text-xl font-medium leading-7 hover:underline hover:text-orange-800">
            <Link to="/shop">Shop</Link>
          </div>
          <div className="text-zinc-500 text-xl font-medium leading-7 hover:underline hover:text-orange-800">
            <Link to="/men">Men</Link>
          </div>
          <div className="text-zinc-500 text-xl font-medium leading-7 hover:underline hover:text-orange-800">
            <Link to="/women">Women</Link>
          </div>
          <div className="text-zinc-500 text-xl font-medium leading-7 hover:underline hover:text-orange-800">
            <Link to="/combos">Combos</Link>
          </div>
          <div className="text-zinc-500 text-xl font-medium leading-7 whitespace-nowrap hover:underline hover:text-orange-800 ">
            <Link to="/joggers">Joggers</Link>
          </div>
        </div>

        <InputWithIcon />

        <div className="items-stretch self-center flex gap-3 my-auto max-md:justify-center">
          
          <div className="justify-center items-center bg-neutral-100 flex aspect-square flex-col p-3 rounded-lg">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a394b963-6bc3-4cb9-877c-85905ba5e802?apiKey=221ce0b0adf946c08e936fb141d94219&"
              className="aspect-square object-contain object-center w-5 overflow-hidden"
            />
          </div>
          <div className="justify-center items-center bg-neutral-100 flex aspect-square flex-col p-3 rounded-lg">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fed012d0-3ff2-4f14-a59e-18cbe4b18f9f?apiKey=221ce0b0adf946c08e936fb141d94219&"
              className="aspect-square object-contain object-center w-5 overflow-hidden"
            />
          </div>
          <div className="relative">
            <div className="justify-center items-center bg-neutral-100 flex aspect-square flex-col p-3 rounded-lg">
              {/* Your icon */}
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ddc9061-d941-4d61-a0fc-665e3235ce50?apiKey=221ce0b0adf946c08e936fb141d94219&"
                className="aspect-square object-contain object-center w-5 overflow-hidden"
              />
              
              {/* Notification count */}
              <div className="absolute top-0 right-0 text-orange-800 p-1 rounded-full font-bold">
                0 {/* Your notification count goes here */}
              </div>
            </div>
</div>

        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-transparent py-2 absolute top-16 left-0 rounded-md w-60">
            {/* Mobile navigation links */}
            <Link to="#" className="block text-zinc-500 text-xl font-medium px-4 py-2 hover:text-black hover:underline">Shop</Link>
            <Link to="#" className="block text-zinc-500 text-xl font-medium px-4 py-2 hover:text-black hover:underline">Home</Link>
            <Link to="#" className="block text-zinc-500 text-xl font-medium px-4 py-2 hover:text-black hover:underline">Man</Link>
            <Link to="#" className="block text-zinc-500 text-xl font-medium px-4 py-2 hover:text-black hover:underline">Woman</Link>
            <Link to="#" className="block text-zinc-500 text-xl font-medium px-4 py-2 hover:text-black hover:underline">Combos</Link>
            <Link to="#" className="block text-zinc-500 text-xl font-medium px-4 py-2 hover:text-black hover:underline">Joggers</Link>
          </div>
        )}
      </div>
    </nav>
  );
}


export default Navbar2;
