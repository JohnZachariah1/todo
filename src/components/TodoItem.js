import React from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="checkbox"
      />
      <span className="todo-text">{todo.task}</span>
      <button onClick={() => deleteTodo(todo.id)} className="delete-btn">Delete</button>
    </li>
  );
}

export default TodoItem;
