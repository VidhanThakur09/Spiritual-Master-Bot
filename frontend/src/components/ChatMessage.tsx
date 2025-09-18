import React from 'react';
import { Heart, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  return (
    <div className={`flex items-start space-x-3 ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
      {/* Avatar */}
      <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg ${
        message.isUser 
          ? 'bg-gradient-to-r from-blue-400 to-teal-400'
          : 'bg-gradient-to-r from-pink-400 to-purple-400'
      }`}>
        {message.isUser ? (
          <User className="w-4 h-4 text-white" />
        ) : (
          <Heart className="w-4 h-4 text-white" />
        )}
      </div>

      {/* Message Bubble */}
      <div className={`max-w-xs md:max-w-md ${message.isUser ? 'ml-auto' : 'mr-auto'}`}>
        <div className={`rounded-2xl px-4 py-3 shadow-lg backdrop-blur-md border ${
          message.isUser
            ? 'bg-gradient-to-r from-blue-500/20 to-teal-500/20 border-blue-300/30 text-white'
            : 'bg-white/10 border-white/20 text-white/90'
        }`}>
          <p className="leading-relaxed whitespace-pre-wrap">{message.text}</p>
        </div>
        
        <p className={`text-xs text-white/50 mt-1 ${message.isUser ? 'text-right' : 'text-left'}`}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;