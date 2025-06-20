import React, {useState} from 'react';
import './App.css';
import Todo from './components/todo';
import TodoForm from './components/form';

function App() {
  const data = [
    {text: 'apprendre Js',isComplete: false},
    {text: 'apprendre React' ,isComplete: false},
    {text: 'apprendre Axios' ,isComplete: false},
  ];
  const [todos, setTodos] = useState(data);

  const addTodo = (text) => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  }

const completeTodo = (index) => {
  const newTodos = [...todos];
  newTodos[index].isComplete = true;
  setTodos(newTodos);
}

const removeTodo = (index) => {
  const newTodos = [...todos];
  newTodos.splice(index, 1);
  setTodos(newTodos);
}


  return (
    <div className="App">
    <div className='todo-liste'>
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completedTodo={completeTodo} 
           removeTodo={removeTodo}
          />
        ))}
       
       <TodoForm addTodo={addTodo} />
    </div>
    </div>
  )
  
}

export default App;
