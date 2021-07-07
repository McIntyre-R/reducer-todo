// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { useReducer} from 'react';
import Todo from './Todo';
import { reducer, initialState } from '../reducer/reducer.js';
import TodoForm from './TodoForm'


function TodoList() {
const [state, dispatch] = useReducer(reducer, initialState);
console.log(state)

const toggleCompleted = clickedTask => {
    dispatch({
      type: 'toggleCompleted',
      payload: clickedTask
    })
  }

const jobsDone = () => {
    dispatch({
      type: 'jobsDone'
    })
  }

        return(
        <div>
            <ul>
                {state.todo.map(task => (
                    <Todo task={task} toggleCompleted={toggleCompleted}/>
                ))}
            </ul>
            <TodoForm addTask={(taskName) => dispatch({type: 'addTask', payload: taskName})} />
            <button onClick={ () => jobsDone()}>Jobs done?</button>
        </div>
        ) 

}


export default TodoList;