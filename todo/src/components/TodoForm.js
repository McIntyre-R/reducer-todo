import React, {useState} from "react";






function TodoForm(props){

  const [state, setState] = useState({
    thingTodo: ""
  })

  
  const handleChanges = e => {
    setState({
      thingTodo: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addTask(state.thingTodo);
    setState({
      thingTodo: ""
    });
  };
 const audio = new Audio('../assets/doing.mp3')
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="thingTodo"
          value={state.thingTodo}
          onChange={handleChanges}
          placeholder='what to do?'
        />
        <button onClick={() => audio.play()}>To-Do</button>
      </form>
    );
  
}

export default TodoForm;
