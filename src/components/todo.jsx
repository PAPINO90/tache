import React from "react";

const Todo = ({todo, completedTodo, index, removeTodo}) => {
    return (
        <div className="todo" style={{textDecoration: todo.isComplete ? "line-through" : ""}}>
             {todo.tex}
             <div className="buttons">
                <button className="button complete" onclick={()=>completedTodo(index)}>terminé</button>
                <button className="button remove" onclick={()=>removeTodo}>suprimé</button>
             </div>

        </div>
    );
          
    };
export default Todo;