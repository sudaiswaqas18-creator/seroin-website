import React, { useState, useRef, useEffect } from 'react';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "👋 Hi! Welcome to Seroin. How can we assist your creative team today?", sender: 'bot' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const msgsEndRef = useRef(null);

  const scrollToBottom = () => {
    if (msgsEndRef.current) {
      msgsEndRef.current.scrollTop = msgsEndRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const botResponse = (query) => {
    const q = query.toLowerCase();
    let reply = "Thanks for asking! Seroin gives you a dedicated creative team for graphic design, motion, packaging, and Amazon content with 24-hr turnarounds. Would you like to book a 1-on-1 demo?";

    if (q.includes('price') || q.includes('cost') || q.includes('plan')) {
      reply = "Our plans start at $999/month for unlimited graphic design and 24-hour turnaround. You can also use our Instant AI Quote tool on this page to customize your exact scope!";
    } else if (q.includes('turnaround') || q.includes('time') || q.includes('fast')) {
      reply = "You receive first drafts within 24 hours on business days! Complex motion and video projects typically deliver within 48 hours.";
    } else if (q.includes('demo') || q.includes('consultation') || q.includes('book')) {
      reply = "You can click the 'Book a consultation' button at the top of the page to schedule a customized 15-minute walkthrough with our team!";
    } else if (q.includes('service') || q.includes('canva') || q.includes('motion')) {
      reply = "We cover Brand & Identity, Packaging & Merchandise, Digital Ads, Motion Graphics, A+ Amazon Listings, Presentations, and Canva Templates!";
    }

    setMessages((prev) => [...prev, { id: Date.now(), text: reply, sender: 'bot' }]);
  };

  const handleSend = (textToSend) => {
    const text = (textToSend || inputVal).trim();
    if (!text) return;

    setMessages((prev) => [...prev, { id: Date.now(), text, sender: 'user' }]);
    setInputVal('');

    setTimeout(() => {
      botResponse(text);
    }, 600);
  };

  return (
    <>
      {!isOpen && (
        <div
          className="chat-fab"
          onClick={() => setIsOpen(true)}
          id="cBtn"
          title="Support Chat"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
          </svg>
        </div>
      )}

      <div className={`chat-modal ${isOpen ? 'open' : ''}`} id="cBox">
        <div className="chat-header">
          <h5><span className="chat-dot"></span> Seroin Assistant</h5>
          <button className="chat-close-btn" onClick={() => setIsOpen(false)}>✕</button>
        </div>
        <div className="chat-body" id="cMsgs" ref={msgsEndRef}>
          {messages.map((msg) => (
            <div key={msg.id} className={`chat-bubble ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          <div className="chat-quick-actions">
            <button onClick={() => handleSend('Tell me about your pricing plans')}>Pricing</button>
            <button onClick={() => handleSend('How does the 24-hr turnaround work?')}>Turnaround</button>
            <button onClick={() => handleSend('What design services do you offer?')}>Services</button>
            <button onClick={() => handleSend('I want to book a demo')}>Book Demo</button>
          </div>
        </div>
        <div className="chat-input-bar">
          <input
            type="text"
            placeholder="Type a message..."
            id="cInp"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSend();
            }}
          />
          <button onClick={() => handleSend()}>Send</button>
        </div>
      </div>
    </>
  );
}
