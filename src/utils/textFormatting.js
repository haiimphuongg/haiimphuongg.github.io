import React from 'react';

/**
 * Formats text with line breaks by converting newline characters to <br> tags
 * @param {string} text - The text to format
 * @returns {JSX.Element[]} - Array of JSX elements with line breaks
 */
export const formatWithLineBreaks = (text) => {
  if (!text) return null;
  
  return text.split('\n').map((line, i) => (
    <span key={i}>
      {line}
      {i < text.split('\n').length - 1 && <br />}
    </span>
  ));
}; 