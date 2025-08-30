import React from 'react';
import BotMessage from '../components/BotMessage';
import UserMessage from '../components/UserMessage';

const ChatWindow = () => {
  return (
    <div className="flex flex-col items-center h-full  py-4 rounded-lg">
      <div className="flex-grow max-w-3/4 overflow-y-auto pr-4 no-scrollbar">
        <UserMessage text="Create a chatbot gpt using python language what will be step for that" />
        <BotMessage
          text={`Sure, I can help you get started with creating a chatbot using GPT in Python. Here are the basic steps you'll need to follow:
1. **Install the required libraries:** You'll need to install the transformers library from Hugging Face to use GPT. You can install it using pip.

2. **Load the pre-trained model:** GPT comes in several sizes and versions, so you'll need to choose the one that fits your needs. You can load a pre-trained GPT model. This loads the 1.3B parameter version of GPT-Neo, which is a powerful and relatively recent model.

3. **Create a chatbot loop:** You'll need to create a loop that takes user input, generates a response using the GPT model, and outputs it to the user. Here's an example loop that uses the input() function to get user input and the gpt() function to generate a response. This loop will keep running until the user exits the program or the loop is interrupted.

4. **Add some personality to the chatbot:** While GPT can generate text, it doesn't have any inherent personality or style. You can make your chatbot more interesting by adding custom prompts or responses that reflect your desired personality. This can then modify the chatbot loop to use these prompts and responses when appropriate. This will make the chatbot seem more human-like and engaging.

These are just the basic steps to get started with a chatbot using GPT in Python. Depending on your requirements, you may need to add more features or complexity to the chatbot. Good luck!`}
        />
        <UserMessage text="What is use of that chatbot?" />
        <BotMessage
          text={`Chatbots can be used for a wide range of purposes, including:

Customer service chatbots can handle frequently asked questions, provide basic support, and help customers navigate a website or app. They can also be used to generate leads, book appointments, and make sales.`}
        />
        <UserMessage text="Create a chatbot gpt using python language what will be step for that" />
        <BotMessage
          text={`Sure, I can help you get started with creating a chatbot using GPT in Python. Here are the basic steps you'll need to follow:

1. **Install the required libraries:** You'll need to install the transformers library from Hugging Face to use GPT. You can install it using pip.

2. **Load the pre-trained model:** GPT comes in several sizes and versions, so you'll need to choose the one that fits your needs. You can load a pre-trained GPT model. This loads the 1.3B parameter version of GPT-Neo, which is a powerful and relatively recent model.

3. **Create a chatbot loop:** You'll need to create a loop that takes user input, generates a response using the GPT model, and outputs it to the user. Here's an example loop that uses the input() function to get user input and the gpt() function to generate a response. This loop will keep running until the user exits the program or the loop is interrupted.

4. **Add some personality to the chatbot:** While GPT can generate text, it doesn't have any inherent personality or style. You can make your chatbot more interesting by adding custom prompts or responses that reflect your desired personality. This can then modify the chatbot loop to use these prompts and responses when appropriate. This will make the chatbot seem more human-like and engaging.

These are just the basic steps to get started with a chatbot using GPT in Python. Depending on your requirements, you may need to add more features or complexity to the chatbot. Good luck!`}
        />
        <UserMessage text="What is use of that chatbot?" />
        <BotMessage
          text={`Chatbots can be used for a wide range of purposes, including:

Customer service chatbots can handle frequently asked questions, provide basic support, and help customers navigate a website or app. They can also be used to generate leads, book appointments, and make sales.`}
        />
      </div>
    </div>
  );
};

export default ChatWindow;
