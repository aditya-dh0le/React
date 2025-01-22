import { useState } from "react";

const App = () => {
  const sectionStyle = {
    color: "red",
    padding: "10px",
    border: "1px solid black",
    textAlign: "center", // Corrected property
  };

  const [count, setCount] = useState(0);
  return (
    <>
      <section style={sectionStyle}>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
      </section>
    </>
  );
};

export default App;
