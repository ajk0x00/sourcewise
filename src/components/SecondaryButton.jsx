import React from 'react';

const SecondaryButton = ({ text, icon: Icon }) => {
  return (
    <button className="flex items-center gap-2 px-2 py-2 border-2 border-neutral-100 bg-white text-black rounded-full hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-200 ease-in-out w-full">
      {Icon && <Icon className="w-5 h-5 mr-2" />}
      <span className='text-sm text-gray-800'>{text}</span>
    </button>
  );
};

export default SecondaryButton;