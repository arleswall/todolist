// display form and handle event listeners
import React from "react";

function FormComponent(props){
  return(
    <div>
        <div className="addbox"></div>
            <form onSubmit={props.handleSubmit} className="addboxCheckbox">
                <input className="additem" onChange={props.handleChange} value={props.newItem.title} name="title" type="text" placeholder="Add an item..."/>
                <button className="addbutton">+</button>
            </form>
    </div>
  )
}

export default FormComponent;