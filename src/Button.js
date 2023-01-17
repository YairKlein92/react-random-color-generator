import randomColor from 'randomcolor';
import React, { useState } from 'react';

export function Button() {
  const [color, setColor] = useState(randomColor()); // a random color
  const [hue, setHue] = useState(undefined);
  const [lum, setLum] = useState(undefined);
  const [height, setHeight] = useState(200);
  const [width, setWidth] = useState(200);

  return (
    <button
      style={{
        marginBottom: '30px',
        padding: '15px',
        borderRadius: '10px',
      }}
      onClick={() => {
        setHue(undefined);
        setLum(undefined);
        setColor(randomColor());
      }}
    >
      Generate a random {} color
    </button>
  );
}

export default function Buttons() {
  return <Button />;
}
