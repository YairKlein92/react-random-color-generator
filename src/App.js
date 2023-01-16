import React from 'react';
import './App.css';
import { useState } from 'react';
import randomColor from 'randomcolor';
// import copy from 'clipboard-copy';

export default function App() {
  const [color, setColor] = useState(randomColor());
  console.log(color);
  const [hue, setHue] = useState(undefined);
  const [lum, setLum] = useState(undefined);

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
          height: '320px',
          width: '200px',
          backgroundColor: bgColor,
        }}
      >
        Generated Color: {bgColor}
      </div>
    </div>
  );
}
