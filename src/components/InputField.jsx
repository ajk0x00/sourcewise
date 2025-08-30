import React from 'react';
import { LuSend } from 'react-icons/lu';
import brain from '../assets/brain.png';

const InputField = () => {
  return (
    <div className="flex items-center bg-white rounded-full py-3 px-5 shadow-md w-4/8 focus:2/3">
      <img src={brain} alt="brain" className="w-8 h-8 mr-2 focus:w-2/3"/>
      <input
        type="text"
        placeholder="What's in your mind?..."
        className="border-none focus:outline-none flex-1 text-base bg-transparent"
      />
      <button className="bg-[#4A4AFF] rounded-full border-none w-10 h-10 flex items-center justify-center cursor-pointer">
        <LuSend className="text-white text-xl" />
      </button>
    </div>
  );
};

export default InputField;
