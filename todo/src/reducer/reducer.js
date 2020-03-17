
export const initialState = {
    todo: [{
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
      }]
}
  
export const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case 'jobsDone':
        return {
           todo: state.todo.filter( e => e.completed !== true)
        };
      case 'addTask':
        return {
            todo: [...state.todo, 
                {
                    task: action.payload,
                    id: new Date(),
                    completed: false
                }]
        };
      case 'toggleCompleted':
          return{
            todo: state.todo.map( e => {
                if (e.id === action.payload) {
                  return {
                    ...e,
                    completed: !e.completed
                  };
                } else {
                  return e;
                }
              })
          }
      default:
        return state;
    } 
  };
  