import React, {useState} from "react"
import {useDispatch} from 'react-redux'
import InputField from './InputField'
import Select from './Select'
import {changeStyle, changeStyleInactive} from '../redux/actions'

function Form() {
  const dispatch = useDispatch()
  const [holderName, setHolderName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cvvNumber, setCvvNumber] = useState('')

  return (
    <form className="form">
      <InputField
        name="number"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        label="Card Number"
        length="19"
      />
      <InputField
        name="holder"
        value={holderName}
        onChange={(e) => setHolderName(e.target.value)}
        onFocus={() => dispatch(changeStyle())}
        onBlur={() => dispatch(changeStyleInactive())}
        label="Card Holder"
      />
      <div className="cardDetails">
        <Select label="Expiration Date"/>
        <InputField
          name="cvvNumber"
          value={cvvNumber}
          onChange={(e) => setCvvNumber(e.target.value)}
          label="CVV"
          length="3"
        />
      </div>
      <button>Submit</button>
    </form>
  )
}

export default Form
