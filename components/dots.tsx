import React from 'react';

const colors = ['#ed6f4d', '#facaa5', '#71c3ad', '#4ca9e0', '#54899c', '#62b3e3', '#c6dcda'];

const makeRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const dots = [];

const makeDots = () => {
  for (let i = 0; i < 25; i++) {
    dots.push({
      x: makeRandomInt(0, 100),
      y: makeRandomInt(0, 100),
      width: makeRandomInt(10, 20),
      rotate: makeRandomInt(0, 180),
      color: colors[i % 6]
    });
  }
};

makeDots();

const Dots = () => (
  <>
    {dots.map(({ x, y, width, rotate, color }, i) => (
      <React.Fragment key={`${x}${y}${color}`}>
        <div
          key={`${x}${y}${color}-top`}
          style={{
            position: 'absolute',
            top: `${y}%`,
            left: `${x}%`,
            width: `${width}px`,
            height: '2px',
            opacity: 1 - y / 100,
            transform: `rotate(${rotate}deg)`,
            backgroundColor: colors[i % 6],
            zIndex: -1
          }}
        />
        <div
          key={`${x}${y}${color}-bot`}
          style={{
            position: 'absolute',
            bottom: `${y}%`,
            right: `${x}%`,
            width: `${width}px`,
            height: '2px',
            opacity: 1 - (1 - y / 100),
            transform: `rotate(${rotate}deg)`,
            backgroundColor: colors[i % 6],
            zIndex: -1
          }}
        />
      </React.Fragment>
    ))}
  </>
);

export default Dots;
