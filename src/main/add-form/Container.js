// connect addtodo from redux
// render form component
// handle input(local state)

import React from "react";
import {connect} from "react-redux";
import FormComponent from "./Component";
import {todos} from "../../redux/actions/";

class FormContainer extends React.Component{
  constructor(){
    super();
    this.state ={
      inputs: {
      title: ""
    }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event){
    event.persist()
    this.setState((prevState)=>{
      return {
        inputs: {
          ...prevState.inputs,
          [event.target.name] : event.target.value
        }
      }
    })
  }
  
  handleSubmit(event){
    event.preventDefault();
    this.props.addTodo(this.state.inputs);
      this.setState({
        inputs: {
          title: ""
        }
      })
    
  }
  
  render(){
    return (
      <FormComponent handleChange={this.handleChange}
                      handleSubmit={this.handleSubmit}
                      newItem={this.state.inputs}
                    />
    )
  }
}

export default connect(null, todos) (FormContainer);