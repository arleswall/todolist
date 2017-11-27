// deleteTodo
// displat todo info and delete button
// render editform container
import React from "react";
import {todos} from "../../../redux/actions/";
import {connect} from "react-redux";
import EditContainer from "./edit-form/Container";

class ListComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      toggleDisplay: false,

    }
    this.handleToggle = this.handleToggle.bind(this);
  }
  
  handleToggle(){
    this.setState((prevState)=>{
      return {
        ...prevState,
      toggleDisplay: !prevState.toggleDisplay
      }
    }
  )}

  render(){
    let hide = {
      display: "none"
    }
    let show = {
      width: "85%",
      marginBottom: "-3%",
      fontSize: "40px",
      marginTop: "2%",
      marginLeft: "10%",
      borderBottom: "1px dashed black",
      display: "inline-block",
      fontFamily: "palatino",
      fontWeight:"100",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    }
  return(
    <div className="listbox">
                <h4 style={this.state.toggleDisplay ? hide : show} >{this.props.todo.title}</h4>
                <button className="delete" onClick={()=>{this.props.deleteTodo(this.props.todo._id)}}>X</button>
  
                  <EditContainer todo={this.props.todo}
                                handleToggle={this.handleToggle}
                                toggleDisplay={this.state.toggleDisplay}/>    
    </div>
  )
}
}
export default connect(null, todos) (ListComponent);