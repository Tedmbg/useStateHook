import React, { useState } from "react";

function App() {
  // initialize our state variable and use useState
  const [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
  }
  function minus() {
    setCount(count - 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={add}>+</button>
      <button>-</button>
    </div>
  );
}

export default App;
