import React from "react";
import FormContainer from "./add-form/Container";
import TodoList from "./todos/TodoList";

function App(props){
  return(
        <div className="body">
              <FormContainer/>
              <TodoList/>
        </div>
  )
}

export default App;