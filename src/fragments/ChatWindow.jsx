import { useState } from 'react';
import BotMessage from '../components/BotMessage';
import UserMessage from '../components/UserMessage';
import InputField from '../components/InputField';

import { sendMessage } from '../services/chat';

const ChatWindow = () => {

  const [messages, setMessages] = useState([]);
  const [lastResponse, setLastResponse] = useState('');

  const handleSendMessage = (inputText) => {
    if (inputText.trim() === '') return;
    const newMessage = { role: 'user', content: inputText };
    setMessages(prevMsgs => [...prevMsgs, newMessage]);

    let message = '';
    const onStreamEvent = (event) => {
      message += event.content;
      setLastResponse(message);
    }
    const onStreamClose = () => {
      const botMessage = message;
      setMessages(prevMsgs => [...prevMsgs, { role: 'bot', content: botMessage }]);
      setLastResponse('');
    }
    sendMessage(inputText, onStreamEvent, onStreamClose, onStreamClose);
  }

  return (
    <div className="flex flex-col items-center h-full w-full py-4 rounded-lg">
      <div className="flex flex-col flex-grow w-3/4 overflow-y-auto pr-4 no-scrollbar">
        <div className="flex-grow">
          {messages.map((msg, index) => (
            msg.role === 'user' ? 
              <UserMessage key={index} text={msg.content} /> : 
              <BotMessage key={index} text={msg.content} />
          ))}
          {lastResponse && <BotMessage text={lastResponse} />}
        </div>
        <div className="flex items-center justify-center sticky bottom-0">
          <InputField onSubmit={handleSendMessage}/>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
