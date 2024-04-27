// in ActionProvider.jsx
import Link from 'next/link';
import React from 'react';
import { getResume } from '../client';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleResume=async ()=>{
    const link = await getResume();
    const resume=createChatBotMessage(<a target={`_blank`} href={link?.resume}>View Resume</a>);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, resume],
    }));
  }
  const handlePredefinedMessage= ()=>{
    const botMessage = createChatBotMessage(<Link href={`/contact`} passHref>Contact Me !</Link>);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }
  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleResume,
            handlePredefinedMessage
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;