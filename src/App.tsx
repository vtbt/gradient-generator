import { ChangeEvent, useEffect, useState } from 'react';
import './App.css';

const DEFAULT_COLOR = '#FF0000';

function App() {
  const [colors, setColors] = useState(['#FFD500', '#FF0040']);
  const [isDisabledRemove, setIsDisabledRemove] = useState(false);
  const [isDisabledAdd, setIsDisabledAdd] = useState(false);

  const colorStops = colors.join(', ');
  const backgroundImage = `linear-gradient(${colorStops})`;

  useEffect(() => {
    if (colors.length === 5) {
      setIsDisabledAdd(true);
      return;
    }
    if (colors.length === 2) {
      setIsDisabledRemove(true);
      return;
    }
  }, [colors.length]);

  const handleRemoveColor = () => {
    if (colors.length === 2) {
      return;
    }

    setIsDisabledAdd(false);
    const newColors = [...colors];
    newColors.pop();
    setColors(newColors);
  };

  const handleAddColor = () => {
    if (colors.length === 5) {
      return;
    }

    setIsDisabledRemove(false);
    setColors([...colors, DEFAULT_COLOR]);
  };

  const handleChangeColor = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newColors = [...colors];
    newColors[index] = event.target.value;
    setColors(newColors);
  };

  return (
    <div className="wrapper">
      <div className="actions">
        <button disabled={isDisabledRemove} onClick={handleRemoveColor}>
          Remove color
        </button>
        <button disabled={isDisabledAdd} onClick={handleAddColor}>
          Add color
        </button>
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
