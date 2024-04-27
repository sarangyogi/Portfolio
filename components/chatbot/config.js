// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';

const botName = "Sarang";

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}.Say Hello to continue`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#000000',
    },
    chatButton: {
      backgroundColor: '#1c1917',
    },
  },
  customComponents: {
    header: () => (
    <div style={{ 
      backgroundColor: '#1c1917', 
      color: "#ffffff", 
      borderRadius: "6px",
      textAlign:'center' ,
      padding:"10px"
    }}>Anything You want</div>)
  }
};

export default config;