import React, { useRef, useEffect, useState } from 'react';
import {
  Sparkles,
  Minus,
  Maximize2,
  Minimize2,
  X,
  Settings,
  RotateCcw
} from 'lucide-react';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { ChatSettingsModal } from './ChatSettingsModal';
import { useChat } from '../../context/ChatContext';

export function ChatWindow({ isEmbedded = false, onClose }) {
  const {
    messages,
    isLoading,
    isMinimized,
    isMaximized,
    toggleMinimize,
    toggleMaximize,
    toggleOpen,
    sendMessage,
    clearMessages,
    provider
  } = useChat();

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const scrollContainerRef = useRef(null);

  // Auto-scroll to bottom on new messages or loading state change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  const handleSelectSuggestion = (suggestionText) => {
    sendMessage(suggestionText);
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      toggleOpen(false);
    }
  };

  return (
    <div
      className={`chat-window-container ${isEmbedded ? 'embedded' : ''} ${
        isMaximized ? 'maximized' : ''
      }`}
    >
      {/* Header */}
      <header className="chat-window-header">
        <div className="chat-header-identity">
          <div className="chat-header-avatar">
            <Sparkles size={17} />
            <span className="online-status-dot" title="AI Concierge Active" />
          </div>
          <div className="chat-header-text">
            <div className="chat-title-row">
              <h3 className="chat-title">TripCanvas AI</h3>
              <span className="chat-engine-pill">
                {provider === 'gemini' ? 'Gemini 1.5' : 'Smart Brain'}
              </span>
            </div>
            <p className="chat-subtitle">Your 24/7 Smart Travel Concierge</p>
          </div>
        </div>

        <div className="chat-header-controls">
          <button
            type="button"
            onClick={clearMessages}
            className="chat-ctrl-btn"
            title="Reset conversation"
            aria-label="Reset conversation"
          >
            <RotateCcw size={14} />
          </button>

          <button
            type="button"
            onClick={() => setIsSettingsOpen(true)}
            className="chat-ctrl-btn"
            title="AI Settings"
            aria-label="AI Settings"
          >
            <Settings size={15} />
          </button>

          {!isEmbedded && (
            <>
              <button
                type="button"
                onClick={toggleMinimize}
                className="chat-ctrl-btn"
                title={isMinimized ? 'Expand' : 'Minimize'}
                aria-label="Minimize chat"
              >
                <Minus size={15} />
              </button>

              <button
                type="button"
                onClick={toggleMaximize}
                className="chat-ctrl-btn desktop-only"
                title={isMaximized ? 'Restore size' : 'Maximize'}
                aria-label="Maximize chat"
              >
                {isMaximized ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
              </button>

              <button
                type="button"
                onClick={handleClose}
                className="chat-ctrl-btn close-btn"
                title="Close chat"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </>
          )}
        </div>
      </header>

      {/* Messages Scroll Area */}
      <div className="chat-messages-area" ref={scrollContainerRef}>
        <div className="chat-messages-inner">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
              onSelectSuggestion={handleSelectSuggestion}
            />
          ))}

          {/* Typing Indicator */}
          {isLoading && (
            <div className="chat-message-row bot-row">
              <div className="chat-avatar bot-avatar">
                <Sparkles size={15} />
              </div>
              <div className="chat-bubble bot-bubble typing-bubble">
                <div className="typing-dots">
                  <span className="dot dot-1" />
                  <span className="dot dot-2" />
                  <span className="dot dot-3" />
                </div>
                <span className="typing-label">TripCanvas AI is thinking...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Form */}
      <footer className="chat-window-footer">
        <ChatInput onSendMessage={sendMessage} isLoading={isLoading} />
      </footer>

      {/* Settings Modal */}
      <ChatSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </div>
  );
}
