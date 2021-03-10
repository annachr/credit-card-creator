import React from "react"

function InputField(props) {
  return (
    <div className="inputField">
      <label htmlFor={props.name}>{props.label}</label>
      <input name={props.name}/>
    </div>
  )
}

export default InputField
