import React, { useState, useRef, useEffect } from 'react';
import { Send, Music, Heart, Sparkles, Bot } from 'lucide-react';
import ChatMessage from '../components/ChatMessage';
import axios from 'axios';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}
interface MessageHistory {
  role: "user" | "assistant";
  content: string;
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Radhe Radhe 🌸 Welcome, dear devotee! I am here to share the divine love and wisdom of Radha and Krishna with you. Tell me, what brings you to seek the divine today?",
      isUser: false,
      timestamp: new Date(),
    }
  ]);
  const [history, setHistory] = useState<MessageHistory[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const port = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000"; 


  const getRandomResponse = async (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();
    try {
      let response = await axios.post(`${port}/hare`, {
        question: lowerMessage,
        history: history,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("API call failed:", error);
      return "Sorry, I couldn't get a response right now. Please try again later.";
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setHistory(prev => [
      ...prev,
      {
        role: "user",
        content: inputValue,
      },
    ])
    setInputValue('');
    setIsTyping(true);
    const botReply = await getRandomResponse(inputValue)
    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: botReply,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botResponse]);
      setHistory(prev =>[
        ...prev,{
          role: "assistant",
          content: botReply,
        },
      ])
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-4xl mx-auto h-[100vh] flex">
        {/* Sidebar */}
        <div className="w-16 md:w-64 bg-white/10 backdrop-blur-md rounded-l-2xl border border-white/20 shadow-lg p-4 flex flex-col items-center md:items-start space-y-6">
          <div className="flex flex-col items-center md:items-start space-y-4 lg:ml-20">
            <div className="p-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl shadow-lg ">
              <Music className="w-6 h-6 text-white" />
            </div>
            <div className="p-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-xl shadow-lg">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div className="p-3 bg-gradient-to-r from-teal-400 to-blue-400 rounded-xl shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <div className="hidden md:block text-center mt-8">
            <p className="text-white/80 text-sm italic">
              "The path of devotion is paved with love, surrender, and continuous remembrance."
            </p>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 bg-white/5 backdrop-blur-md rounded-r-2xl border border-white/20 shadow-lg flex flex-col">
          {/* Chat Header */}
          <div className="p-6 border-b border-white/20">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white animate-pulse" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">Divine Guidance</h2>
                <p className="text-white/70 text-sm">Your spiritual companion</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isTyping && (
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/20">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" />
                    <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-6 border-t border-white/20">
            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Share your heart with the divine..."
                  className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-3 text-white placeholder-white/60 focus:outline-none focus:border-pink-300/50 focus:ring-2 focus:ring-pink-300/20 transition-all duration-300"
                />
              </div>
              <button
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-pink-400 to-purple-400 p-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                <Send className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;