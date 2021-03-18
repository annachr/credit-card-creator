import React, { useContext } from "react"
import { useDispatch } from 'react-redux'
import InputField from './InputField'
import Select from './Select'
import {InputDataContext} from '../inputDataContext'
import {changeStyle, changeStyleInactive, showCardBack, showCardFront} from '../redux/actions'

function Form() {
  const {
    formCardNumber,
    formHolderName,
    changeCardNumber,
    handleNumberChange,
    handleHolderChange,
    changeHolder,
    formCvvNumber,
    handleCvvChange,
    changeCvv
  } = useContext(InputDataContext)

  const dispatch = useDispatch()

  return (
    <form className="form">
      <InputField
        name="number"
        value={formCardNumber}
        onChange={handleNumberChange}
        onKeyUp={changeCardNumber}
        label="Card Number"
        length="19"
      />
      <InputField
        name="holder"
        value={formHolderName}
        onChange={handleHolderChange}
        onKeyUp={changeHolder}
        onFocus={() => dispatch(changeStyle())}
        onBlur={() => dispatch(changeStyleInactive())}
        label="Card Holder"
      />
      <div className="cardDetails">
        <Select label="Expiration Date"/>
        <InputField
          name="cvvNumber"
          value={formCvvNumber}
          onChange={handleCvvChange}
          onKeyUp={changeCvv}
          onFocus={() => dispatch(showCardBack())}
          onBlur={() => dispatch(showCardFront())}
          label="CVV"
          length="3"
        />
      </div>
      <button>Submit</button>
    </form>
  )
}

export default Form
