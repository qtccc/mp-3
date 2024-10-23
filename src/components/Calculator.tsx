import React, { useState } from "react";
import "../css/project.css"; // Include CSS for styling

const Calculator: React.FC = () => {
  // State to store numbers and result
  const [firstNumber, setFirstNumber] = useState<string>("");
  const [secondNumber, setSecondNumber] = useState<string>("");
  const [result, setResult] = useState<number | string>("");

  // Function to handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setNumber: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setNumber(e.target.value);
  };

  // Arithmetic operations
  const add = () => setResult(parseFloat(firstNumber) + parseFloat(secondNumber));
  const subtract = () => setResult(parseFloat(firstNumber) - parseFloat(secondNumber));
  const multiply = () => setResult(parseFloat(firstNumber) * parseFloat(secondNumber));
  const divide = () => {
    const divisor = parseFloat(secondNumber);
    if (divisor !== 0) setResult(parseFloat(firstNumber) / divisor);
    else setResult("Error: Division by zero");
  };
  const power = () => {
    const base = parseFloat(firstNumber);
    const exponent = parseInt(secondNumber);
    let result = 1;
    for (let i = 0; i < exponent; i++) result *= base;
    setResult(result);
  };

  // Clear fields and result
  const clearFields = () => {
    setFirstNumber("");
    setSecondNumber("");
    setResult("");
  };

  return (
    <section id="calculator">
      <h2>Calculator</h2>
      <input
        type="text"
        value={firstNumber}
        placeholder="Enter first number"
        onChange={(e) => handleInputChange(e, setFirstNumber)}
      />
      <input
        type="text"
        value={secondNumber}
        placeholder="Enter second number"
        onChange={(e) => handleInputChange(e, setSecondNumber)}
      />
      <div className="buttons">
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={multiply}>*</button>
        <button onClick={divide}>/</button>
        <button onClick={power}>^</button>
        <button onClick={clearFields}>Clear</button>
      </div>
      <h3 id="output" className={typeof result === "number" && result < 0 ? "negative" : ""}>
        {result}
      </h3>
    </section>
  );
};

export default Calculator;