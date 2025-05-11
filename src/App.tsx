import { ChangeEvent, useState } from 'react';
import './App.css';

const DEFAULT_COLOR = '#FF0000';

function App() {
  const [colors, setColors] = useState(['#FFD500', '#FF0040']);

  const colorStops = colors.join(', ');
  const backgroundImage = `linear-gradient(${colorStops})`;

  const removeColor = () => {
    if (colors.length <= 2) {
      window.alert('There is a minimum of 2 colors');
      return;
    }

    const nextColors = [...colors];
    nextColors.pop();
    setColors(nextColors);
  };

  const addColor = () => {
    if (colors.length >= 5) {
      window.alert('There is a maximum of 5 colors');
      return;
    }
    const nextColors = [...colors];
    nextColors.push(DEFAULT_COLOR);
    setColors(nextColors);
  };

  const handleChangeColor = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const nextColors = [...colors];
    nextColors[index] = event.target.value;
    setColors(nextColors);
  };

  return (
    <div className="wrapper">
      <div className="actions">
        <button onClick={removeColor}>Remove color</button>
        <button onClick={addColor}>Add color</button>
      </div>

      <div
        className="gradient-preview"
        style={{
          backgroundImage,
        }}
      />

      <div className="colors">
        {colors.map((color, index) => {
          const colorId = `color-${index}`;
          return (
            <div key={colorId} className="color-wrapper">
              <label htmlFor={colorId}>Color {index + 1}:</label>
              <div className="input-wrapper">
                <input
                  id={colorId}
                  type="color"
                  onChange={(event) => handleChangeColor(event, index)}
                  value={color}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
