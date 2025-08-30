import React from 'react';
import ReactMarkdown from "react-markdown";
import { PiArrowCircleDownLeftLight } from "react-icons/pi";


const BotMessage = ({ text }) => {
  return (
    <div className="flex flex-col px-14 rounded-lg">
      <p className='flex gap-2 italics text-indigo-400'>Source Wise <PiArrowCircleDownLeftLight className='rotate-270'/> </p>
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
};

export default BotMessage;
