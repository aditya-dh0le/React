import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <>
      <div>
        <label htmlFor={"Add Task"}>Add Task</label>
        <input type="text" value={input} onChange={handleInputChange} />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <div>{todos && <ul>{todos.map()}</ul>}</div>
    </>
  );
};

export default Todo;
