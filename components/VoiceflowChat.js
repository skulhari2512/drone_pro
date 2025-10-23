import { useState, useEffect, useRef } from 'react';

export default function VoiceflowChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userId] = useState(() => `user_${Date.now()}`);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Launch conversation on mount
  useEffect(() => {
    launchConversation();
  }, []);

  const launchConversation = async () => {
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

      const data = await response.json();
      processResponse(data);
    } catch (error) {
      console.error('Failed to launch conversation:', error);
    }
  };

  const processResponse = (data) => {
    if (data && Array.isArray(data)) {
      const newMessages = data
        .filter(item => item.type === 'text' || item.type === 'speak')
        .map(item => ({
          text: item.payload?.message || item.payload?.text || '',
          isBot: true
        }));
      
      setMessages(prev => [...prev, ...newMessages]);
    }
  };

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

      const data = await response.json();
      processResponse(data);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { 
        text: 'Sorry, something went wrong. Please try again.', 
        isBot: true 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ 
      position: 'fixed', 
      bottom: '20px', 
      right: '20px', 
      width: '350px', 
      height: '500px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      {/* Header */}
      <div style={{ 
        padding: '15px', 
        backgroundColor: '#007bff', 
        color: 'white',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        fontWeight: 'bold'
      }}>
        Chat with Us
      </div>

      {/* Messages */}
      <div style={{ 
        flex: 1, 
        overflowY: 'auto', 
        padding: '15px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{
            alignSelf: msg.isBot ? 'flex-start' : 'flex-end',
            backgroundColor: msg.isBot ? '#f1f1f1' : '#007bff',
            color: msg.isBot ? '#000' : '#fff',
            padding: '10px',
            borderRadius: '10px',
            maxWidth: '80%',
            wordWrap: 'break-word'
          }}>
            {msg.text}
          </div>
        ))}
        {isLoading && (
          <div style={{ alignSelf: 'flex-start', color: '#666' }}>
            Typing...
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={sendMessage} style={{ 
        padding: '15px', 
        borderTop: '1px solid #ccc',
        display: 'flex',
        gap: '10px'
      }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          disabled={isLoading}
          style={{
            flex: 1,
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            outline: 'none'
          }}
        />
        <button 
          type="submit" 
          disabled={isLoading}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}