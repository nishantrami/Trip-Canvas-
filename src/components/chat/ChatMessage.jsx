import React, { useState } from 'react';
import {
  Sparkles,
  User,
  Copy,
  Check,
  Volume2
} from 'lucide-react';
import {
  DestinationCard,
  HotelCardsList,
  RestaurantCardsList,
  ItineraryCard,
  BudgetEstimateCard
} from './ChatCards';
import { useChat } from '../../context/ChatContext';

/**
 * Format markdown text to safe HTML
 */
function renderMarkdown(text) {
  if (!text) return '';

  let html = text
    // Escape standard HTML tags for safety
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Headings
  html = html.replace(/^### (.*$)/gim, '<h3 class="chat-md-h3">$1</h3>');
  html = html.replace(/^#### (.*$)/gim, '<h4 class="chat-md-h4">$1</h4>');

  // Blockquotes
  html = html.replace(/^\&gt; (.*$)/gim, '<blockquote class="chat-md-quote">$1</blockquote>');

  // Bold & Italic
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Checkbox lists
  html = html.replace(/^- \[ \] (.*$)/gim, '<div class="chat-md-check"><span class="check-box"></span><span>$1</span></div>');
  html = html.replace(/^- \[x\] (.*$)/gim, '<div class="chat-md-check checked"><span class="check-box checked">✓</span><span>$1</span></div>');

  // Bullet items
  html = html.replace(/^- (.*$)/gim, '<li class="chat-md-li">$1</li>');

  // Markdown links [label](url)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="chat-md-link" target="_blank" rel="noopener noreferrer">$1</a>');

  // Code badges
  html = html.replace(/`([^`]+)`/g, '<code class="chat-md-code">$1</code>');

  // Simple Markdown Table conversion
  if (html.includes('|')) {
    const lines = html.split('\n');
    let inTable = false;
    let tableHtml = '<div class="chat-table-wrap"><table class="chat-md-table"><tbody>';
    const processedLines = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith('|') && line.endsWith('|')) {
        // Skip separator line | :--- | :--- |
        if (/^\|[\s:-|]+\|$/.test(line)) {
          continue;
        }
        if (!inTable) {
          inTable = true;
        }
        const cells = line.split('|').slice(1, -1);
        tableHtml += '<tr>' + cells.map(c => `<td>${c.trim()}</td>`).join('') + '</tr>';
      } else {
        if (inTable) {
          tableHtml += '</tbody></table></div>';
          processedLines.push(tableHtml);
          inTable = false;
          tableHtml = '<div class="chat-table-wrap"><table class="chat-md-table"><tbody>';
        }
        processedLines.push(line);
      }
    }
    if (inTable) {
      tableHtml += '</tbody></table></div>';
      processedLines.push(tableHtml);
    }
    html = processedLines.join('\n');
  }

  // Preserve paragraphs & newlines
  html = html.replace(/\n\n+/g, '<br/><br/>');
  html = html.replace(/\n/g, '<br/>');

  return html;
}

export function ChatMessage({ message, onSelectSuggestion }) {
  const isUser = message.sender === 'user';
  const [copied, setCopied] = useState(false);
  const { speakMessage } = useChat();

  const handleCopy = () => {
    if (!message.text) return;
    navigator.clipboard.writeText(message.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSpeak = () => {
    speakMessage(message.text);
  };

  return (
    <div className={`chat-message-row ${isUser ? 'user-row' : 'bot-row'}`}>
      {!isUser && (
        <div className="chat-avatar bot-avatar">
          <Sparkles size={16} />
        </div>
      )}

      <div className="chat-bubble-container">
        <div className={`chat-bubble ${isUser ? 'user-bubble' : 'bot-bubble'} ${message.isError ? 'error-bubble' : ''}`}>
          <div
            className="chat-bubble-text"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(message.text) }}
          />

          {/* Cards Attachments */}
          {message.cards && (
            <div className="chat-cards-attachment">
              {message.cards.destination && (
                <DestinationCard destination={message.cards.destination} />
              )}

              {message.cards.destinations && Array.isArray(message.cards.destinations) && (
                <div className="chat-dest-list-wrap">
                  {message.cards.destinations.map(d => (
                    <DestinationCard key={d.id} destination={d} />
                  ))}
                </div>
              )}

              {message.cards.itinerary && (
                <ItineraryCard
                  itinerary={message.cards.itinerary}
                  destination={message.cards.destination}
                />
              )}

              {message.cards.hotels && (
                <HotelCardsList
                  hotels={message.cards.hotels}
                  destinationId={message.cards.destination?.id}
                />
              )}

              {message.cards.restaurants && (
                <RestaurantCardsList
                  restaurants={message.cards.restaurants}
                  destinationId={message.cards.destination?.id}
                />
              )}

              {message.cards.budget && (
                <BudgetEstimateCard
                  budget={message.cards.budget}
                  destination={message.cards.destination}
                />
              )}
            </div>
          )}

          {/* Message Footer with Timestamp and Action Buttons */}
          <div className="chat-bubble-footer">
            <span className="chat-timestamp">{message.timestamp}</span>

            {!isUser && (
              <div className="chat-bubble-actions">
                <button
                  type="button"
                  onClick={handleSpeak}
                  className="chat-action-btn"
                  title="Read aloud"
                  aria-label="Read aloud"
                >
                  <Volume2 size={13} />
                </button>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="chat-action-btn"
                  title={copied ? 'Copied to clipboard' : 'Copy response'}
                  aria-label="Copy response"
                >
                  {copied ? <Check size={13} color="#2E7D5B" /> : <Copy size={13} />}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Dynamic Follow-up Suggestions */}
        {!isUser && message.suggestions && message.suggestions.length > 0 && (
          <div className="chat-suggestions-row">
            {message.suggestions.map((suggestion, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => onSelectSuggestion?.(suggestion)}
                className="chat-suggestion-chip"
              >
                <span>{suggestion}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {isUser && (
        <div className="chat-avatar user-avatar">
          <User size={15} />
        </div>
      )}
    </div>
  );
}
