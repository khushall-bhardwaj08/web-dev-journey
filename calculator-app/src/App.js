import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const [result, setResult] = useState(0);

  const handleOperation = (type) => (e) => {
    e.preventDefault();
    const value = Number(inputRef.current.value);

    if (!value && value !== 0) return;

    if (type === "add") setResult((r) => r + value);
    if (type === "sub") setResult((r) => r - value);
    if (type === "mul") setResult((r) => r * value);

    if (type === "div") {
      if (value === 0) {
        alert("Cannot divide by zero");
        return;
      }
      setResult((r) => r / value);
    }

    inputRef.current.value = "";
  };

  const clearAll = (e) => {
    e.preventDefault();
    setResult(0);
    inputRef.current.value = "";
  };

  return (
    <div className="container">
      <div className="calculator">
        <h2>Calculator</h2>

        <div className="display">{result}</div>

        <input
          ref={inputRef}
          type="number"
          placeholder="Enter number"
        />

        <div className="buttons">
          <button onClick={handleOperation("add")}>+</button>
          <button onClick={handleOperation("sub")}>-</button>
          <button onClick={handleOperation("mul")}>×</button>
          <button onClick={handleOperation("div")}>÷</button>
        </div>

        <button className="clear" onClick={clearAll}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;