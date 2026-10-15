import React, { useState } from 'react';
import {
  X,
  Key,
  Volume2,
  VolumeX,
  Trash2,
  Download,
  Cpu,
  Sparkles,
  Eye,
  EyeOff,
  CheckCircle2,
  ShieldCheck,
  Info
} from 'lucide-react';
import { useChat } from '../../context/ChatContext';

export function ChatSettingsModal({ isOpen, onClose }) {
  const {
    apiKey,
    provider,
    setApiKey,
    soundEnabled,
    setSoundEnabled,
    clearMessages,
    exportChatHistory
  } = useChat();

  const [inputKey, setInputKey] = useState(apiKey || '');
  const [selectedProvider, setSelectedProvider] = useState(provider || 'builtin');
  const [showKey, setShowKey] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e) => {
    e.preventDefault();
    setApiKey(inputKey, selectedProvider);
    onClose();
  };

  const handleClearHistory = () => {
    if (window.confirm('Are you sure you want to clear your entire chat history?')) {
      clearMessages();
      onClose();
    }
  };

  return (
    <div className="chat-modal-backdrop" onClick={onClose}>
      <div className="chat-settings-modal" onClick={(e) => e.stopPropagation()}>
        <div className="chat-modal-header">
          <div className="chat-modal-title-row">
            <Sparkles size={18} className="text-accent" />
            <h3>AI Assistant Settings</h3>
          </div>
          <button onClick={onClose} className="chat-modal-close-btn" aria-label="Close settings">
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSave} className="chat-settings-body">
          {/* Engine Selector */}
          <div className="settings-section">
            <label className="settings-label">
              <Cpu size={15} /> Travel Intelligence Engine
            </label>
            <div className="settings-engine-options">
              <button
                type="button"
                onClick={() => setSelectedProvider('builtin')}
                className={`engine-option-card ${selectedProvider === 'builtin' ? 'active' : ''}`}
              >
                <div className="engine-card-header">
                  <span className="engine-name">TripCanvas Smart Brain</span>
                  {selectedProvider === 'builtin' && <CheckCircle2 size={16} className="text-success" />}
                </div>
                <p className="engine-desc">
                  Instant, offline, zero-latency travel engine deeply integrated with our destinations, hotels, and restaurant database.
                </p>
                <span className="engine-badge free">No API Key Needed</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedProvider('gemini')}
                className={`engine-option-card ${selectedProvider === 'gemini' ? 'active' : ''}`}
              >
                <div className="engine-card-header">
                  <span className="engine-name">Google Gemini 1.5 Live</span>
                  {selectedProvider === 'gemini' && <CheckCircle2 size={16} className="text-success" />}
                </div>
                <p className="engine-desc">
                  Connect your custom Google Gemini API key for open-ended worldwide questions and conversational generation.
                </p>
                <span className="engine-badge custom">Custom Key</span>
              </button>
            </div>
          </div>

          {/* API Key Input (if Gemini selected) */}
          {selectedProvider === 'gemini' && (
            <div className="settings-section">
              <label className="settings-label" htmlFor="apiKeyInput">
                <Key size={15} /> Google Gemini API Key
              </label>
              <div className="api-key-input-wrap">
                <input
                  id="apiKeyInput"
                  type={showKey ? 'text' : 'password'}
                  value={inputKey}
                  onChange={(e) => setInputKey(e.target.value)}
                  placeholder="AIzaSy..."
                  className="chat-setting-input"
                />
                <button
                  type="button"
                  onClick={() => setShowKey(!showKey)}
                  className="key-toggle-btn"
                  title={showKey ? 'Hide key' : 'Show key'}
                >
                  {showKey ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              <p className="settings-hint">
                <ShieldCheck size={13} /> Your key is stored securely in your browser's local storage and is never sent to our servers.
              </p>
            </div>
          )}

          {/* Sound Preferences */}
          <div className="settings-section">
            <label className="settings-label">
              <Volume2 size={15} /> Audio & Feedback
            </label>
            <div className="settings-toggle-row">
              <div className="toggle-info">
                <span className="toggle-title">Sound Chimes</span>
                <span className="toggle-sub">Play soft synthesized chimes on message send and receive</span>
              </div>
              <button
                type="button"
                onClick={() => setSoundEnabled(!soundEnabled)}
                className={`custom-switch ${soundEnabled ? 'active' : ''}`}
                aria-label="Toggle sound chimes"
              >
                <div className="switch-thumb" />
              </button>
            </div>
          </div>

          {/* Conversation Actions */}
          <div className="settings-section">
            <label className="settings-label">
              <Info size={15} /> Chat Data & History
            </label>
            <div className="history-actions-row">
              <button
                type="button"
                onClick={exportChatHistory}
                className="btn-settings-action"
              >
                <Download size={14} />
                <span>Export Chat (.txt)</span>
              </button>

              <button
                type="button"
                onClick={handleClearHistory}
                className="btn-settings-action danger"
              >
                <Trash2 size={14} />
                <span>Clear History</span>
              </button>
            </div>
          </div>

          <div className="chat-modal-footer">
            <button type="button" onClick={onClose} className="btn-chat-sec">
              Cancel
            </button>
            <button type="submit" className="btn-chat-pri">
              Save Preferences
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
