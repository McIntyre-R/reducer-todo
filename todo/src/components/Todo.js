import React from "react";

function Todo(props) {

console.log(props)
   
        return (
            <div
              onClick={() => props.toggleCompleted(props.task.id)}
              className={props.task.completed ? "completed" : ""}
            >
              <li>{props.task.task}</li>
            </div>
          );
    

}
  

export default Todo;