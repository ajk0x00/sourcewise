import React from 'react';
import ReactMarkdown from "react-markdown";
import userIcon from '../assets/girlProfile.png';

const UserMessage = ({ text }) => {
  return (
    <div className="flex items-center p-3 rounded-lg">
      <div className='w-8 h-8 rounded-full mr-3 flex-shrink-0'>
        <img src={userIcon} alt="User Icon" className='w-full h-full object-cover rounded-full' />
      </div>
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
};

export default UserMessage;
