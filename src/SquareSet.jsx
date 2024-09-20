import React, { useState } from 'react';
import './App.css';

const SquareSet = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const squares = Array.from({ length: 5 }); // Create an array for 5 squares

  const handleToggle = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % squares.length);
  };

  return (
    <div>
      <div className="square-container">
        {squares.map((_, index) => (
          <div
            key={index}
            className="square"
            style={{
              backgroundColor: index === activeIndex ? 'red' : 'black',
            }}
          >
            Square {index + 1}
          </div>
        ))}
      </div>
      <button onClick={handleToggle}>Next Square</button>
    </div>
  );
};

export default SquareSet;
