const todos = function(prevTodos = [], action){
      let newTodos = [...prevTodos];
  switch(action.type){
    case "ADD_TODO":
    newTodos.unshift(action.todo)
    return newTodos;
    
    case "LOAD_TODOS":
    return action.todos.reverse();
    
    case "DELETE_TODO":
    return newTodos.filter((todo)=>{
      return action.id !== todo._id;
    })
    
    case "EDIT_TODO":
    return newTodos.map((todo)=>{
      if(action.id === todo._id){
        return action.editedTodo;
      } else {
       return todo
      }
    })
    default:
    return prevTodos
  }
}

export default todos;