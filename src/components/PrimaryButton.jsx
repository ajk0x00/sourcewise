import React from 'react';

const PrimaryButton = ({ text, icon: Icon, ...props }) => {

  return (
    <button 
      className='flex items-center justify-center gap-3 px-2 py-3 bg-indigo-500 text-white rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-200 ease-in-out w-45'
      {...props}
    >
      {Icon && <Icon />}
      <span className='text-sm font-semibold'>{text}</span>
    </button>
  );
};

export default PrimaryButton;