import React, { useContext } from "react"
import { useDispatch } from 'react-redux'
import {InputDataContext} from '../inputDataContext'
import InputField from './InputField'
import Select from './Select'
import CardTheme from './CardTheme'
import {changeStyle, changeStyleInactive, showCardBack, showCardFront} from '../redux/actions'

function Form() {
  const {
    formCardNumber,
    formHolderName,
    formCvvNumber,
    handleNumberChange,
    handleHolderChange,
    handleCvvChange,
    changeHolder,
    changeCardNumber,
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
      <CardTheme label="Card Theme"/>
      <button className="submit">Submit</button>
    </form>
  )
}

export default Form
