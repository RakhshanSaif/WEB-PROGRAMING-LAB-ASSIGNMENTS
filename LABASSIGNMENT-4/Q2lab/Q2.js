import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  const add = () => {
    setResult(Number(num1) + Number(num2));
  };

  const subtract = () => {
    setResult(Number(num1) - Number(num2));
  };

  return (
    <div className="container">
      <h1>Simple Calculator</h1>

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />

      <div className="buttons">
        <button onClick={add}>Add</button>
        <button onClick={subtract}>Subtract</button>
      </div>

      <h2>Result: {result}</h2>

      <p>24BKT0164</p>
      <p>MD RAKHSHAN SAIF</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Calculator />);
