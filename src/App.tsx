import { useState } from 'react';
import './App.css';
function App() {
  const [colors, setColors] = useState(['#FFD500', '#FF0040']);

  const colorStops = colors.join(', ');
  const backgroundImage = `linear-gradient(${colorStops})`;

  return (
    <>
      <div
        className="gradient-preview"
        style={{
          backgroundImage,
        }}
      />

      <form>
        {colors.map((color, index) => {
          const colorId = `color-${index}`;

          return (
            <div key={colorId} className="color-row">
              <label htmlFor={colorId}>Color {index + 1}:</label>
              <input
                id={colorId}
                type="color"
                value={color}
                onChange={(event) => {
                  const newColors = [...colors];
                  newColors[index] = event.target.value;
                  setColors(newColors);
                }}
              />
            </div>
          );
        })}
      </form>
    </>
  );
}

export default App;
