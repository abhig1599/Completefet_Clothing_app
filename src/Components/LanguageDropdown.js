import React from 'react';
import Down from '../images/Vector.svg'
import Up from '../images/Vectora.svg'
const LanguageDropdown = () => {
  const languages = ["English (united states)", "English (united kingdom)" ,"Spanish", "French", "German"]; // Replace with your language options

  return (
    <div className="relative">
      <select
        className="block appearance-none w-full bg-white  text-gray-700 py-2 pl-8 pr-4 border-none rounded-2xl leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
      >
        {languages.map((language, index) => (
          <option key={index} value={language}>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
};

const YourComponent = () => {
  return (
    <div className="flex items-center space-x-4">
      {/* Language dropdown */}
      <LanguageDropdown />
    </div>
  );
};

export default YourComponent;
