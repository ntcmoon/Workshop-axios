import { useState, us } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Calculator() {
  const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "del"];
  const symbols = ["+", "-", "x", "÷", "="];
  const [count, setCount] = useState("");
  const [symbol,setSymbol] = useState("")

  const handleClickNumber = (number) => {
    if (typeof number !== "number") return;
    setCount((prev) => String(prev)+ String(number))
  }

  const handleClickSymbol = (symbol) => {
    setSymbol(symbol);
  }

  console.log(symbol);

  return (
    <>

    <div className="mb-5)">
      <p>{count || "0"}</p></div>
    <div  className="grid grid-cols-3 gap-4">
      {number.map((number) => {
        return <button key={number} className="" 
        onClick={() => handleClickNumber(number)}>{number}</button>;
      })}
    </div>

      {symbols.map((symbols) => {
        return <button key={symbols}
        onClick={() => handleClickSymbol(symbols)}>{symbols}</button>;
      })}
    </>
  );

}

export default Calculator;
