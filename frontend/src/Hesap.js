import React, { useState } from "react";
import "./App.css";

function Hesap() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Hata");
    }
  };

  const handleClear = () => {
    setInput("");
    setResult(0);
  };

  return (
    <div className="Hesap">
      <div className="calculator">
        <div className="display">
          <input type="text" value={input} readOnly />
        </div>
        <div className="buttons">
          <div className="row">
            <button onClick={() => handleButtonClick("1")}>1</button>

            <button onClick={() => handleButtonClick("4")}>4</button>
            <button onClick={() => handleButtonClick("7")}>7</button>
            <button onClick={() => handleButtonClick("0")}>0</button>
          </div>
          <div className="row">
            <button onClick={() => handleButtonClick("2")}>2</button>
            <button onClick={() => handleButtonClick("5")}>5</button>

            <button onClick={() => handleButtonClick("8")}>8</button>

            <button onClick={() => handleButtonClick(".")}>.</button>
          </div>
          <div className="row">
            <button onClick={() => handleButtonClick("3")}>3</button>
            <button onClick={() => handleButtonClick("6")}>6</button>
            <button onClick={() => handleButtonClick("9")}>9</button>
            <button onClick={handleCalculate}>=</button>
          </div>
          <div className="row">
            <button onClick={() => handleButtonClick("+")}>+</button>

            <button onClick={() => handleButtonClick("-")}>-</button>
            <button onClick={() => handleButtonClick("/")}>/</button>
            <button onClick={() => handleButtonClick("*")}>*</button>
          </div>
          <div className="row">
            <button onClick={handleClear}>C</button>
          </div>
        </div>
        <div className="result">
          <p>Sonuç: {result}</p>
        </div>
      </div>
    </div>
  );
}

export default Hesap;
