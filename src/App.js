import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [colorHex, setColorHex] = useState(randomColor());

  return (
    <>
      <h1>React Random Color Generator</h1>

      <div style={{ backgroundColor: colorHex }}>
        Generated Color: {colorHex}
      </div>
      <br />
      <button
        onClick={() => {
          const newHex = randomColor();
          setColorHex(newHex);
        }}
      >
        Generate
      </button>
    </>
  );
}
