import React from 'react';

const PrimaryButton = ({ text, icon: Icon, size='large' }) => {

  const size_chart = {
    'small' : 'w-fit h-fit',
    'medium': 'w-md h-fit',
    'large': 'w-lg h-fit'
  }

  return (
    <button className={`flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out ${size_chart[size]}`}>
      {Icon && <Icon />}
      {text}
    </button>
  );
};

export default PrimaryButton;