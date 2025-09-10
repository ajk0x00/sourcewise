import React, { useState } from 'react';
import { LuMessageCircleMore } from "react-icons/lu";
import { FiTrash2 } from "react-icons/fi";

const PreviousChat = ({ text, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false);

  const truncatedText = text.length > 20 ? text.substring(0, 20) + '...' : text;

  return (
    <div
      className="h-10 flex justify-between items-center rounded-s-full hover:bg-violet-50 cursor-pointer relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='flex items-center space-x-2 py-3 px-2'>
        <LuMessageCircleMore className="text-gray-500 text-xl" />
        <div className="flex-grow text-sm text-gray-800 overflow-hidden text-ellipsis whitespace-nowrap w-4/5">
          {truncatedText}
        </div>
      </div>
      {isHovered && onDelete && 
        <div className='flex items-center justify-center h-full ps-4 rounded-s-full bg-indigo-100 w-1/5'>
          <FiTrash2
            className="text-gray-500 bg-indigo-100 hover:text-red-600 text-lg cursor-pointer me-2"
            onClick={onDelete}
          />
        </div>
      }
    </div>
  );
};

export default PreviousChat;