import React from 'react';
import Search from '../images/search.svg'


const InputWithIcon = ({ icon, placeholderText }) => {
  return (
    <div className="relative">
      <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
       <img src={Search}/>
        {icon}
      </span>
      <input
        type="text"
        placeholder={placeholderText}
        className="pl-8 pr-4 py-2 border-none rounded-lg w-full focus:outline-none focus:border-orange-500"
      />
    </div>
  );
};

const YourComponent = () => {
  const searchIcon = (
    <svg
      className="h-5 w-5 text-orange-200"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      {/* Your search icon path goes here */}
    </svg>
  );

  return (
    <div>
      <InputWithIcon icon={searchIcon} placeholderText="Search..." className="text-orange-200"/>
    </div>
  );
};

export default YourComponent;
