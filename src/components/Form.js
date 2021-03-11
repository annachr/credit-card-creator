import React from "react"
import InputField from './InputField'
import Select from './Select'

function Form() {
  return (
    <form className="form">
      <InputField name="number" label="Card Number"/>
      <InputField name="holder" label="Card Holder"/>
      <div className="cardDetails">
        <Select label="Expiration Date"/>
        <InputField name="cvv" label="CVV" className="cvv"/>
      </div>
      <button>Submit</button>
    </form>
  )
}

export default Form
