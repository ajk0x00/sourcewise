import { useState } from 'react';
import { LuSend } from 'react-icons/lu';
import brain from '../assets/brain.png';

const InputField = ({ onSubmit }) => {

  const [inputText, setInputText] = useState('');

  const handleSubmit = () => {
    if (inputText.trim() === '') return;
    onSubmit(inputText);
    setInputText('');
  }

  const handleKeyPress = (event) => {
    // Submit on `Enter` keyCode
    if (event.keyCode === 13 || event.which === 13) {
      onSubmit(inputText)
      setInputText('');
    }
  }

  return (
    <div className="flex items-center bg-white rounded-full py-3 px-5 shadow-md w-4/8 focus:2/3">
      <img src={brain} alt="brain" className="w-8 h-8 mr-2 focus:w-2/3"/>
      <input
        type="text"
        placeholder="What's in your mind?..."
        className="border-none focus:outline-none flex-1 text-base bg-transparent"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button className="bg-[#4A4AFF] rounded-full border-none w-10 h-10 flex items-center justify-center cursor-pointer">
        <LuSend className="text-white text-xl" onClick={handleSubmit}/>
      </button>
    </div>
  );
};

export default InputField;
