import React, {useState} from "react"
import InputField from './InputField'
import Select from './Select'

function Form() {

  const [holderName, setHolderName] = useState('')


  return (
    <form className="form">
      <InputField
        name="number"
        label="Card Number"
        length="19"
      />
      <InputField
        name="holder"
        value={holderName}
        onChange={(e) => setHolderName(e.target.value)}
        onFocus={() => console.log('focus')}
        label="Card Holder"
      />
      <div className="cardDetails">
        <Select label="Expiration Date"/>
        <InputField
          name="cvv"
          label="CVV"
          length="3"
        />
      </div>
      <button>Submit</button>
    </form>
  )
}

export default Form
