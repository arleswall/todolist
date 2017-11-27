import todos from "./todos";

let state = {
  todos:[]
}
function reducer(prevState = state, action){
  return {
    todos: todos(prevState.todos, action)
  }
}

export default reducer;