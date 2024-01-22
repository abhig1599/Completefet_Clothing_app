import React, { useState } from 'react';
import {Link} from 'react-router-dom'

const Nav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Your Logo</div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
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
        <div className="hidden md:flex space-x-4">
          <Link to="#" className="text-zinc-500 text-xl font-medium leading-7 hover:underline hover:text-orange-800">Home</Link>
          <Link to="#" className="text-zinc-500 text-xl font-medium leading-7 hover:underline hover:text-orange-800">About</Link>
          <Link to="#" className="text-zinc-500 text-xl font-medium leading-7 hover:underline hover:text-orange-800">Services</Link>
          <Link to="#" className="text-zinc-500 text-xl font-medium leading-7 hover:underline hover:text-orange-800">Contact</Link>
        </div>
        
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
        <div className="justify-center items-center bg-neutral-100 flex aspect-square flex-col p-3 rounded-lg">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ddc9061-d941-4d61-a0fc-665e3235ce50?apiKey=221ce0b0adf946c08e936fb141d94219&"
            className="aspect-square object-contain object-center w-5 overflow-hidden"
          />
        </div>
      </div>

      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-700 py-2">
          <Link to="#" className="block text-white px-4 py-2">Home</Link>
          <Link to="#" className="block text-white px-4 py-2">About</Link>
          <Link to="#" className="block text-white px-4 py-2">Services</Link>
          <Link to="#" className="block text-white px-4 py-2">Contact</Link>
          
        </div>
        
      )}
    </nav>
  );
};

export default Nav;
