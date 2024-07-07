import "./App.css"
import React, { useState } from 'react'

export default function Counter() {
  const [number, setNumber] = useState(0);


  return (
    <ul className="flex items-center justify-center text-6xl">
      <li className="m-5" onClick={() => setNumber((prev) => prev - 1)}>-</li>
      <li className="m-5">{number}</li>
      <li className="m-5" onClick={() => setNumber((prev) => prev + 1)}>+</li>
      <li onClick={() => setNumber(0)}>reset</li>
    </ul>
  )
}
