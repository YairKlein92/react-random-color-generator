import './App.css';
import randomColor from 'randomcolor';
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export default function App() {
  const [color, setColor] = useState(randomColor());
  console.log(color);
  const [hue, setHue] = useState(undefined);
  const [lum, setLum] = useState(undefined);

  const [height, setHeight] = useState(200);
  const [width, setWidth] = useState(200);
  const userColor = randomColor({
    luminosity: lum,
    hue: hue,
  });

  const bgColor = lum && hue ? userColor : color;
  // function handleChange(event) {
  //   console.log(event.target.value);
  //   return event.target.value;
  // }

  return (
    <div>
      <h1>Random Color Generator with React </h1>
      Hue:
      <input
        value={hue}
        onChange={(event) => {
          setHue(event.target.value);
        }}
      />
      <br />
      Luminosity:
      <input
        value={lum}
        onChange={(event) => {
          setLum(event.target.value);
        }}
      />
      Width:
      <input
        value={width}
        onChange={(event) => {
          setWidth(event.currentTarget.value);
        }}
      />
      Height:
      <input
        value={height}
        onChange={(event) => {
          setHeight(event.currentTarget.value);
        }}
      />
      <br />
      or
      <br />
      <button
        onClick={() => {
          setColor(randomColor());
        }}
      >
        Generate a random color
      </button>
      <div
        style={{
          height: Number(height),
          width: Number(width),
          backgroundColor: bgColor,
          WebkitTransition: 'background-color 2s ease-out',
          MozTransition: 'background-color 2s ease-out',
          OTransition: 'background-color 2s ease-out',
          transition: 'background-color 2s ease-out',
        }}
      >
        Generated Color: {bgColor}
      </div>
    </div>
  );
}
