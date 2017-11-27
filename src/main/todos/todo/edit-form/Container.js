// connect edittodo 
// render edit form component
// handle toggle display
// handle input(local state)
import React from "react";
import {connect} from "react-redux";
import {todos} from "../../../../redux/actions/";
import EditComponent from "./Component";

class EditContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      editTodo: {
        title: props.todo.title,
        completed: props.todo.completed
      }
    }
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleEdit(event){
    event.persist();
    this.setState((prevState)=>{
      return {
        editTodo:{
          ...prevState.editTodo,
          [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        }
      }
    })
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.editTodo.completed !== this.state.editTodo.completed){
      this.handleSubmit()
    }
  }
  
  handleSubmit(event){
    if(event) event.preventDefault();
     this.props.editTodo(this.props.todo._id, this.state.editTodo)
  }
  
  
  render(){
    return(
      <EditComponent handleEdit={this.handleEdit}
                      todo= {this.props.todo}
                      handleSubmit={this.handleSubmit}
                      editedTodo={this.state.editTodo}
                      handleToggle={this.props.handleToggle}
                      toggleDisplay={this.props.toggleDisplay}
                      />
    )
  }
}

export default connect(null, todos)(EditContainer);