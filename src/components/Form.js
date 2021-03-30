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
    changeCvv,
    showThemeSection,
    clearData
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
        pattern="[0-9]{19}"
      />
      <InputField
        name="holder"
        value={formHolderName}
        onChange={handleHolderChange}
        onKeyUp={changeHolder}
        onFocus={() => dispatch(changeStyle())}
        onBlur={() => dispatch(changeStyleInactive())}
        label="Card Holder"
        pattern="^[^0-9]+"
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
          pattern="[0-9]{3}"
        />
      </div>
      <CardTheme onClick={showThemeSection}/>
      <div className="btnSection">
        <button className="btn" onClick={(e) => e.preventDefault()}>Submit</button>
        <button className="btn" onClick={clearData}>Clear Data</button>
      </div>

    </form>
  )
}

export default Form
