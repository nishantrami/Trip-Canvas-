import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { travelAssistantEngine } from '../services/travelAssistantEngine';
import { audioChimes } from '../utils/audioChimes';
import { useToast } from './ToastContext';

const ChatContext = createContext();

const STORAGE_KEY_MESSAGES = 'tripcanvas_chat_messages';
const STORAGE_KEY_SOUND = 'tripcanvas_chat_sound_enabled';
const STORAGE_KEY_API_KEY = 'tripcanvas_ai_api_key';
const STORAGE_KEY_PROVIDER = 'tripcanvas_ai_provider';

const DEFAULT_WELCOME_MESSAGE = {
  id: 'msg_welcome',
  sender: 'assistant',
  text: `### Welcome to TripCanvas AI Travel Assistant! 🧭✨\n\nI am your intelligent 24/7 travel concierge. I can plan custom itineraries, find luxury & budget stays, calculate travel costs, recommend dining, and answer any question about your trip!\n\nWhat journey can we plan today?`,
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  suggestions: [
    "Plan 3 days in Kashmir",
    "Top luxury hotels in Udaipur",
    "Goa budget trip under ₹20,000",
    "What should I pack for Swiss Alps?",
    "How do I create a new trip?"
  ]
};

export function ChatProvider({ children }) {
  const { showToast } = useToast();

  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  // Settings
  const [soundEnabled, setSoundEnabled] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY_SOUND);
    return saved !== null ? JSON.parse(saved) : true;
  });

  const [apiKey, setApiKeyState] = useState(() => {
    return localStorage.getItem(STORAGE_KEY_API_KEY) || '';
  });

  const [provider, setProviderState] = useState(() => {
    return localStorage.getItem(STORAGE_KEY_PROVIDER) || 'builtin';
  });

  // Messages
  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_MESSAGES);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // ignore
    }
    return [DEFAULT_WELCOME_MESSAGE];
  });

  // Sync messages to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_MESSAGES, JSON.stringify(messages));
    } catch {
      // safe fallback
    }
  }, [messages]);

  // Sync sound setting
  useEffect(() => {
    audioChimes.setEnabled(soundEnabled);
    localStorage.setItem(STORAGE_KEY_SOUND, JSON.stringify(soundEnabled));
  }, [soundEnabled]);

  // Text-to-speech speaker
  const speakMessage = useCallback((text) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      showToast?.('Speech synthesis not supported in this browser', 'info');
      return;
    }

    // Strip markdown formatting for cleaner speech
    const cleanSpeech = text
      .replace(/[#*`_~>[\]()|]/g, ' ')
      .replace(/https?:\/\/\S+/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(cleanSpeech);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  }, [showToast]);

  const toggleOpen = useCallback((forceState) => {
    setIsOpen((prev) => {
      const next = typeof forceState === 'boolean' ? forceState : !prev;
      if (next) {
        setUnreadCount(0);
        setIsMinimized(false);
      }
      return next;
    });
  }, []);

  const toggleMinimize = useCallback(() => {
    setIsMinimized((prev) => !prev);
  }, []);

  const toggleMaximize = useCallback(() => {
    setIsMaximized((prev) => !prev);
  }, []);

  const clearMessages = useCallback(() => {
    window.speechSynthesis?.cancel();
    setMessages([DEFAULT_WELCOME_MESSAGE]);
    localStorage.removeItem(STORAGE_KEY_MESSAGES);
    showToast?.('Chat history cleared', 'info');
  }, [showToast]);

  const setApiKey = useCallback((key, prov = 'gemini') => {
    travelAssistantEngine.setApiKey(key, prov);
    setApiKeyState(key || '');
    setProviderState(prov);
    showToast?.(key ? 'AI Key saved successfully' : 'Switched to Built-In Engine', 'success');
  }, [showToast]);

  const sendMessage = useCallback(async (userInput) => {
    const trimmed = (userInput || '').trim();
    if (!trimmed || isLoading) return;

    const userMessageId = `user_${Date.now()}`;
    const userMessage = {
      id: userMessageId,
      sender: 'user',
      text: trimmed,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    audioChimes.playSendChime();
    setIsLoading(true);

    try {
      // Simulate short natural thinking delay for better UX
      const start = Date.now();
      const response = await travelAssistantEngine.processQuery(trimmed, messages);
      const elapsed = Date.now() - start;
      const minWait = 400; // smooth natural feel
      if (elapsed < minWait) {
        await new Promise((resolve) => setTimeout(resolve, minWait - elapsed));
      }

      const botMessageId = `assistant_${Date.now()}`;
      const botMessage = {
        id: botMessageId,
        sender: 'assistant',
        text: response.text,
        cards: response.cards || null,
        suggestions: response.suggestions || [],
        action: response.action || null,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, botMessage]);
      audioChimes.playReceiveChime();

      if (!isOpen) {
        setUnreadCount((c) => c + 1);
      }
    } catch (err) {
      console.error('Error generating AI response:', err);
      const errorMessage = {
        id: `err_${Date.now()}`,
        sender: 'assistant',
        text: `### ⚠️ Connection Notice\n\nI had a temporary hiccup processing that request: *${err.message || 'Unknown issue'}*. Please try again or rephrase your question.`,
        isError: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestions: [
          "Plan 3 days in Kashmir",
          "Best hotels in Udaipur",
          "Goa budget under ₹20,000"
        ]
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, isOpen, messages]);

  const openWithPrompt = useCallback((promptText) => {
    setIsOpen(true);
    setIsMinimized(false);
    setUnreadCount(0);
    if (promptText) {
      sendMessage(promptText);
    }
  }, [sendMessage]);

  const exportChatHistory = useCallback(() => {
    const lines = messages.map((m) => {
      const role = m.sender === 'user' ? 'You' : 'TripCanvas AI';
      return `[${m.timestamp}] ${role}:\n${m.text}\n---------------------------------`;
    });
    const blob = new Blob([lines.join('\n\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `TripCanvas_Chat_${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(a);
    showToast?.('Chat history downloaded', 'success');
  }, [messages, showToast]);

  return (
    <ChatContext.Provider
      value={{
        isOpen,
        isMinimized,
        isMaximized,
        isLoading,
        unreadCount,
        messages,
        soundEnabled,
        apiKey,
        provider,
        toggleOpen,
        toggleMinimize,
        toggleMaximize,
        setSoundEnabled,
        setApiKey,
        clearMessages,
        sendMessage,
        openWithPrompt,
        speakMessage,
        exportChatHistory
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}
