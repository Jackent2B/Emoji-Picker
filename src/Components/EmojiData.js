import React from 'react';

const EmojiData = ({ chosenEmoji }) => (
  <div style={{ textAlign: 'center', marginRight: '810px' }}>
    <strong>Symbol:</strong> {chosenEmoji.emoji}
    <br />
  </div>
);

export default EmojiData;
