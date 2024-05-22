import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo({
        id: Date.now(),
        task: task,
        completed: false
      });
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="todo-input"
        placeholder="Add a new task"
      />
      <button type="submit" className="add-btn">Add Todo</button>
    </form>
  );
}

export default TodoForm;
