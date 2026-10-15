import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, MicOff, Sparkles, Loader2 } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

export function ChatInput({ onSendMessage, isLoading }) {
  const [text, setText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const textareaRef = useRef(null);
  const recognitionRef = useRef(null);
  const { showToast } = useToast();

  // Initialize Speech Recognition if supported
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onresult = (event) => {
          const transcript = event.results[0]?.[0]?.transcript;
          if (transcript) {
            setText((prev) => (prev ? `${prev} ${transcript}` : transcript));
          }
          setIsListening(false);
        };

        recognition.onerror = () => {
          setIsListening(false);
          showToast?.('Microphone access was denied or timed out', 'error');
        };

        recognition.onend = () => {
          setIsListening(false);
        };

        recognitionRef.current = recognition;
      }
    }

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch {
          // ignore
        }
      }
    };
  }, [showToast]);

  // Adjust textarea height automatically
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${Math.min(scrollHeight, 120)}px`;
    }
  }, [text]);

  const handleToggleVoice = () => {
    if (!recognitionRef.current) {
      showToast?.('Voice recognition is not supported in this browser', 'info');
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current.start();
        setIsListening(true);
        showToast?.('Listening... Speak your travel question', 'info');
      } catch {
        setIsListening(false);
      }
    }
  };

  const handleSend = (e) => {
    e?.preventDefault();
    if (!text.trim() || isLoading) return;

    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }

    onSendMessage(text.trim());
    setText('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <form onSubmit={handleSend} className="chat-input-form">
      <div className={`chat-input-wrapper ${isListening ? 'listening-active' : ''}`}>
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={isListening ? 'Listening to your voice...' : 'Ask anything (e.g. 3 days in Kashmir, Goa hotels)...'}
          className="chat-textarea"
          rows={1}
          disabled={isLoading}
        />

        <div className="chat-input-actions">
          <button
            type="button"
            onClick={handleToggleVoice}
            className={`chat-mic-btn ${isListening ? 'mic-recording' : ''}`}
            title={isListening ? 'Stop listening' : 'Speak your question'}
            aria-label="Voice input"
          >
            {isListening ? <MicOff size={16} /> : <Mic size={16} />}
          </button>

          <button
            type="submit"
            disabled={!text.trim() || isLoading}
            className="chat-send-btn"
            title="Send message"
            aria-label="Send message"
          >
            {isLoading ? (
              <Loader2 size={16} className="spin" />
            ) : (
              <Send size={16} />
            )}
          </button>
        </div>
      </div>

      <div className="chat-input-hints">
        <span>Press <strong>Enter ↵</strong> to send, <strong>Shift + Enter</strong> for new line</span>
        <span className="ai-powered-tag">
          <Sparkles size={11} /> AI Travel Concierge
        </span>
      </div>
    </form>
  );
}
