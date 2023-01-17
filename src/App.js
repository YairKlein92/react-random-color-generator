import './App.css';
import randomColor from 'randomcolor';
import React, { useState } from 'react';

// import Button from './Button.js';

export default function App() {
  const [color, setColor] = useState(randomColor()); // a random color
  console.log(color);
  const [hue, setHue] = useState(undefined);
  const [lum, setLum] = useState(undefined);
  const [height, setHeight] = useState(200);
  const [width, setWidth] = useState(200);
  const userColor = randomColor({
    luminosity: lum,
    hue: hue,
  });

  return (
    <div
      style={{
        margin: '30px',
        border: '15px inset salmon',
        borderRadius: '30px',
        padding: '20px',
      }}
    >
      <h1 style={{ textAlign: 'center', color: 'salmon' }}>
        Random Color Generator with React
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
          style={{ border: '5px inset salmon' }}
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
          style={{ border: '5px inset salmon' }}
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
          style={{ border: '5px inset salmon' }}
          value={width}
          onChange={(event) => {
            setWidth(event.currentTarget.value);
          }}
        />
        <br />
        Height :
        <br />
        <input
          style={{ border: '5px inset salmon' }}
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
            borderColor: 'salmon',
            marginBottom: '30px',
            padding: '15px',
            borderRadius: '10px salmon',
          }}
          onClick={() => {
            setColor(userColor);
          }}
        >
          Generate a random {lum} {hue} color
        </button>
        <button
          style={{
            borderColor: 'salmon',
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
          Generate
        </button>
      </div>
      <div
        style={{
          height: Number(height),
          width: Number(width),
          borderRadius: '60%',
          backgroundColor: userColor,
          textAlign: 'center',
          margin: 'auto',
          // WebkitTransition: 'background-color 0.3s ease-out',
          // MozTransition: 'background-color 0.3s ease-out',
          // OTransition: 'background-color 0.3s ease-out',
          transition: 'background-color 0.3s ease-out',
        }}
      >
        <div>{`Generated Color: ${userColor}`}</div>
      </div>
    </div>
  );
}
