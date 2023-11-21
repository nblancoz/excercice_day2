import React, { useState } from "react";
import "./Counter.css"

function Counter({step}) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + step);
  };

  const decrement = () => {
    setCount(count - step);
  };

  return (
    <div>
      <h4>Counter: {count}</h4>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
