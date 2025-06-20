import React, {useState} from "react";

const TodoForm = ({addTodo}) => { 
    const [todo, setTodos] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!todo) return;
        addTodo(todo); 
        setTodos("");
       
    };
    return(
        <form onSubmit={handleSubmit}>
           <input type="text" className="input"
           value={todo}
              onChange={(event) => setTodos(event.target.value)} 
           />
        </form>
    );
   }
export default TodoForm; 
