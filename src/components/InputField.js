import React from "react"

function InputField(props) {
  return (
    <div className="inputField">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        name={props.name}
        value={props.value}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onChange={props.onChange}
        onKeyUp={props.onKeyUp}
        maxLength={props.length}
      />
    </div>
  )
}


export default InputField
