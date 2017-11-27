// display form
// call event listeners
import React from "react";

function EditComponent(props){
  let hide = {
    display: "none"
  }
  let show = {
    display: "inline-block",
    textAlign: "right",
    width: "82%"  
  }
  return(
    <div>
        <input className="checkbox" onChange={props.handleEdit} checked={props.editedTodo.completed} name="completed" type="checkbox"/>
        <button className="editbutton" onClick={props.handleToggle}>...</button>
        
          <div style={props.toggleDisplay ? show : hide}>          
              <form onClick={props.handleSubmit}>
                    <input className="editbar" onChange={props.handleEdit} value={props.editedTodo.title} name="title" type="text"/>
                    <button className="save">Save</button>
              </form>
          </div>  
    </div>
  )
}

export default EditComponent;