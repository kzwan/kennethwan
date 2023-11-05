import React, { useEffect, useState } from 'react';
import "./circle.css"; 

const CircleText = () => {
  const [text, setText] = useState('Software Engineering   iOS Dev   Web Dev   AI   ');

  return (
    <div className="circle" style={{ '--numchs': text.length }}>
      {text &&
        text.split('').map((char, index) => {
          return (
            <div
              key={index}
              className={char === ' ' ? 'char space' : 'char'}
              style={{
                '--char-index': index,
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </div>
          );
        })}
    </div>
  );
};

export default CircleText;
