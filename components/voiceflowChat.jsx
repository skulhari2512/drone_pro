// components/VoiceflowChat.jsx - CORRECT LOCATION
import { useState, useEffect, useRef, useCallback, memo } from 'react';
import { X, Send, MessageCircle } from 'lucide-react';

// Memoized components for better performance
const ChatButton = memo(({ onClick }) => (
  <button
    onClick={onClick}
    className="fixed bottom-6 right-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 z-50 group"
    aria-label="Open AI chat assistant"
  >
    <div className="relative">
      {/* AI Sparkle Icon */}
      <svg
        className="w-7 h-7"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
          fill="currentColor"
          className="animate-pulse"
        />
        <circle cx="19" cy="5" r="1.5" fill="currentColor" className="animate-ping" />
        <circle cx="5" cy="19" r="1.5" fill="currentColor" className="animate-ping" style={{ animationDelay: '0.5s' }} />
      </svg>
      {/* Online indicator dot */}
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse" />
    </div>
  </button>
));
ChatButton.displayName = 'ChatButton';

const LoadingIndicator = memo(() => (
  <div className="flex justify-start">
    <div className="bg-white rounded-2xl px-4 py-2 shadow-sm">
      <div className="flex space-x-2">
        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  </div>
));
LoadingIndicator.displayName = 'LoadingIndicator';

const Message = memo(({ msg }) => (
  <div className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
    <div
      className={`max-w-[80%] rounded-2xl px-4 py-2 ${
        msg.isBot
          ? 'bg-white text-slate-800 shadow-sm'
          : 'bg-blue-600 text-white'
      }`}
    >
      <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
    </div>
  </div>
));
Message.displayName = 'Message';

export default function VoiceflowChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userId] = useState(() => `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      launchConversation();
    }
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  const launchConversation = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/voiceflow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: null,
          userId: userId,
          action: { type: 'launch' }
        })
      });

      if (!response.ok) throw new Error('Failed to launch');

      const data = await response.json();
      processResponse(data);
    } catch (error) {
      console.error('Failed to launch conversation:', error);
      setMessages([{ 
        text: 'Hi! I\'m your Drone Career Assistant. How can I help you today?', 
        isBot: true 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const processResponse = useCallback((data) => {
    if (data && Array.isArray(data)) {
      const newMessages = data
        .filter(item => item.type === 'text' || item.type === 'speak')
        .map(item => ({
          text: item.payload?.message || item.payload?.text || '',
          isBot: true
        }))
        .filter(msg => msg.text);
      
      if (newMessages.length > 0) {
        setMessages(prev => [...prev, ...newMessages]);
      }
    }
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/voiceflow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          userId: userId
        })
      });

      if (!response.ok) throw new Error('Network error');

      const data = await response.json();
      processResponse(data);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { 
        text: 'Sorry, I\'m having trouble connecting. Please try again in a moment.', 
        isBot: true 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  return (
    <>
      {!isOpen && <ChatButton onClick={handleOpen} />}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-slate-200 animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Drone Career Assistant</h3>
                <p className="text-xs text-blue-100">Online • Ready to help</p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 scroll-smooth">
            {messages.map((msg, idx) => (
              <Message key={`msg-${idx}`} msg={msg} />
            ))}
            {isLoading && <LoadingIndicator />}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={sendMessage} className="p-4 border-t border-slate-200 bg-white rounded-b-2xl">
            <div className="flex space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about drone training..."
                disabled={isLoading}
                maxLength={500}
                className="flex-1 px-4 py-2 border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-slate-100 disabled:cursor-not-allowed text-sm"
                aria-label="Type your message"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}