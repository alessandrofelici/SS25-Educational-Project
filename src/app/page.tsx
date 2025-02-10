"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="container">
      <button className="counter" onClick={handleClick}>
        <p>Click Me: {count}</p>
      </button>
    </div>
  );
}
