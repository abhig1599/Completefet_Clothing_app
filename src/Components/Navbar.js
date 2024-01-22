import React from 'react';
import Logo from '../images/Logo.svg'
import InputWithIcon from './InputWithIcon'
import LanguageDropdown from './LanguageDropdown'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
  
    <nav className=" flex items-center">
      <div className=''>
    
      </div>
      <div className="text-white">
        <Link to="/HomePage" className="text-white hover:text-gray-300"><img src={Logo}  className='flex h-20 w-30 bg-orange-800 ml-0'/></Link>
        </div>

      <div className="ml-auto flex items-center space-x-6">
       <InputWithIcon/>
       <LanguageDropdown />
    </div>
    <div className="ml-auto flex items-center space-x-4 m-5">
        
        <Link to="/LoginPage">
        <button className="bg-orange-800 text-white py-2 px-9 rounded">Sign In</button>
        </Link>
        <Link to="/RegistrationPage">
        <button className="border border-orange-800 text-orange-800 py-2 px-9 rounded ml-4">Signup</button>
        </Link>
        

        
      </div>
    </nav>
  );
};

export default Navbar;
