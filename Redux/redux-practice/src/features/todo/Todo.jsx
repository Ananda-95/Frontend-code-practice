import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {  addTodo,
  toggleTodo,
  deleteTodo } from "./todoSlice";

export default function Todo() {
  const [text, setText] = useState("");

  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!text.trim()) return;

    dispatch(addTodo(text.trim()));
    setText("");
  };

  return (
    <div>
      <h2>Todo App</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
      />

      <button onClick={handleAdd}>Add Todo</button>

      {todos.map((todo) => (
        <div key={todo.id}>
          <span
            onClick={() => dispatch(toggleTodo(todo.id))}
            style={{
              cursor: "pointer",
              textDecoration: todo.completed
                ? "line-through"
                : "none",
            }}
          >
            {todo.text}
          </span>

          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}