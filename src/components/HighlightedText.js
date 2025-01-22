import React from 'react';

const HighlightedText = ({ text, phrases }) => {
  if (!text || !phrases || phrases.length === 0) return text;

  const regex = new RegExp(`(${phrases.join('|')})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, index) =>
    phrases.includes(part) ? <span key={index} style={{ fontWeight: 'bold' }}>{part}</span> : part
  );
};

export const RenderContent = ({ item }) => {
  if (typeof item === 'string') {
    return <>{item}</>; // Render plain string
  }

  if (typeof item === 'object' && item.text) {
    return (
      <HighlightedText
        text={item.text}
        phrases={item.highlight || []}
      />
    ); // Render highlighted text
  }

  return null; // Fallback for invalid items
};

export default HighlightedText;
