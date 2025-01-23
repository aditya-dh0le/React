import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>{count}</h2>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
      </div>
    </>
  );
};

export default Counter;
