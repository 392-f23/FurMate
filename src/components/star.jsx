// Star.js
import React, { useState } from 'react';

const Star = () => {
  const [isFilled, setIsFilled] = useState(false);

  const toggleFill = () => {
    setIsFilled(!isFilled);
  };

  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill={isFilled ? "gold" : "none"} 
      stroke="black" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      onClick={toggleFill}
      style={{ cursor: 'pointer' }}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}

export default Star;