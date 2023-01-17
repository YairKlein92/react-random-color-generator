import './App.css';
import randomColor from 'randomcolor';
import React, { useState } from 'react';
import Buttons from './Button.js';

export default function App() {
  const [color, setColor] = useState(randomColor()); // a random color
  console.log(color);
  const [hue, setHue] = useState(undefined);
  const [lum, setLum] = useState(undefined);
  const [height, setHeight] = useState(200);
  const [width, setWidth] = useState(200);
  const [hueInputValue, setHueInputValue] = useState('');
  const userColor = randomColor({
    luminosity: lum,
    hue: hue,
  });

  const bgColor = lum && hue ? userColor : color;
  const buttonText = lum && hue ? `${lum} ${hue}` : '';
  // function handleChange(event) {
  //   console.log(event.target.value);
  //   return event.target.value;
  // }

  return (
    <div
      style={{
        margin: '30px',
        border: '3px dotted grey',
        padding: '20px',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>
        Random Color Generator with React{' '}
      </h1>
      <div
        style={{
          width: '12%',
          margin: 'auto',
        }}
      >
        Hue:
        <br />
        <input
          placeholder="green"
          value={hue}
          onChange={(event) => {
            setHue(event.target.value);
          }}
        />
        <br />
        Luminosity:
        <br />
        <input
          placeholder="dark"
          value={lum}
          onChange={(event) => {
            setLum(event.target.value);
          }}
        />
        <br />
        Width:
        <br />
        <input
          value={width}
          onChange={(event) => {
            setWidth(event.currentTarget.value);
          }}
        />
        <br />
        Height :
        <br />
        <input
          value={height}
          onChange={(event) => {
            setHeight(event.currentTarget.value);
          }}
        />
        <br />
        <br />
        or
        <br />
        <br />
        <button
          style={{
            marginBottom: '30px',
            padding: '15px',
            borderRadius: '10px',
          }}
          onClick={() => {
            setColor(userColor);
          }}
        >
          Generate a random {buttonText} color
        </button>
        <button
          style={{
            marginBottom: '30px',
            padding: '15px',
            borderRadius: '10px',
          }}
          onClick={() => {
            setHue('');
            setLum('');
            setColor(randomColor());
          }}
        >
          Generate a random color
        </button>
        <Buttons />
      </div>
      <div
        style={{
          height: Number(height),
          width: Number(width),
          borderRadius: '60%',
          backgroundColor: bgColor,
          textAlign: 'center',
          margin: 'auto',
          WebkitTransition: 'background-color 3s ease-out',
          MozTransition: 'background-color 3s ease-out',
          OTransition: 'background-color 3s ease-out',
          transition: 'background-color 3s ease-out',
        }}
      >
        <div style={{ position: 'relative', bottom: '170px', left: '320px' }}>
          {' '}
          Generated Color: {bgColor}
        </div>
      </div>
    </div>
  );
}
