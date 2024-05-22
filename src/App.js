import React,{useState} from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import './App.css';

function App() {
  const[todos,setTodo]= useState([]);

  const addTodo = (todo) =>{
    setTodo([...todos,todo]);
  }
  const toggleTodo = (id) =>{
    setTodo(
      todos.map(todo=>todo.id===id?{...todo,completed:!todo.completed}:todo)
    )
  }
  const deleteTodo=(id)=>{
    setTodo(todos.filter(todo=> todo.id!==id));
  }
  return (
    <div className="App">
      <h1>To-Do</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
