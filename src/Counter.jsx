import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increasedHandler = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>{counter}</p>
      <button onClick={increasedHandler}> Increase </button>
    </div>
  );
};
export default Counter;
