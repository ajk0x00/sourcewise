import React, { useState } from 'react';
import { CiFileOn } from "react-icons/ci";
import { FiTrash2 } from "react-icons/fi";

const UploadedDoc = ({ text, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false);

  const truncatedText = text.length > 20 ? text.substring(0, 20) + '...' : text;

  return (
    <div
      className="h-10 flex justify-between items-center rounded-s-full hover:bg-slate-100 cursor-pointer relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='flex items-center space-x-2 px-2 py-3 w-4/5 group'>
        <CiFileOn className="text-gray-500 text-xl group-hover:text-indigo-500" />
        <div className="flex-grow text-sm text-gray-800 group-hover:text-indigo-500 group-hover:font-semibold overflow-hidden text-ellipsis whitespace-nowrap w-4/5">
          {truncatedText}
        </div>
      </div>
      {isHovered && onDelete && 
        <div className='flex items-center justify-center w-1/5 h-full ps-4 rounded-s-full bg-indigo-100'>
          <FiTrash2
            className="text-gray-500 bg-indigo-100 hover:text-red-600 text-lg cursor-pointer me-2"
            onClick={onDelete}
          />
        </div>
      }
    </div>
  );
};

export default UploadedDoc;