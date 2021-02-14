import React, { useState } from 'react';
import Picker from 'emoji-picker-react';
import EmojiData from './Components/EmojiData';

const App = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  return (
    <>
      <h1 style={{ textAlign: 'center' }}> Emoji picker</h1>
      <div
        style={{
          textAlign: 'center',
          margin: '1% 40%',
          maxWidth: '50%',
          padding: '10px',
        }}
      >
        <Picker onEmojiClick={onEmojiClick} />
        {chosenEmoji && <EmojiData chosenEmoji={chosenEmoji} />}
      </div>
    </>
  );
};

export default App;
