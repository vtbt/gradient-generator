import { ChangeEvent, useState } from 'react';
import './App.css';

const DEFAULT_COLOR = '#FF0000';

function App() {
  const [colors, setColors] = useState([
    '#FFD500',
    '#FF0040',
    DEFAULT_COLOR,
    DEFAULT_COLOR,
    DEFAULT_COLOR,
  ]);

  const [numOfVisibleColors, setNumOfVisibleColors] = useState(2);

  const visibleColors = colors.slice(0, numOfVisibleColors);
  const colorStops = visibleColors.join(', ');
  const backgroundImage = `linear-gradient(${colorStops})`;

  const removeColor = () => {
    if (numOfVisibleColors <= 2) {
      window.alert('There is a minimum of 2 colors');
      return;
    }
    setNumOfVisibleColors(numOfVisibleColors - 1);
  };

  const addColor = () => {
    if (numOfVisibleColors >= 5) {
      window.alert('There is a maximum of 5 colors');
      return;
    }
    setNumOfVisibleColors(numOfVisibleColors + 1);
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
        {visibleColors.map((color, index) => {
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
