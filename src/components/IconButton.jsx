import React from 'react';

const IconButton = ({ icon: Icon, ...props }) => {
  return (
    <button
      className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white"
      {...props}
    >
      <Icon className="w-5 h-5" />
    </button>
  );
};

export default IconButton;