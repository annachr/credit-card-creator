import React, {useState} from 'react'
const InputDataContext = React.createContext()

function InputContextProvider(props) {
  /*FORM DATA*/
  const [formCardNumber, setFormCardNumber] = useState('')
  const [formHolderName, setFormHolderName] = useState('')
  const [formCvvNumber, setFormCvvNumber] = useState('')

  /*CARD DATA*/
  const [cardNumber, setCardNumber] = useState('#### #### #### ####')
  const [cardHolder, setCardHolder] = useState('FULL NAME')
  const [cardCvvNumber, setCardCvvNumber] = useState('')
  const [cardExpirationMonth, setCardExpirationMonth] = useState('MM')
  const [cardExpirationYear, setCardExpirationYear] = useState('YY')


  function handleNumberChange(e) {
    setFormCardNumber(e.target.value)
  }

  function changeCardNumber() {
    formCardNumber.length === 0 ? setCardNumber('#### #### #### ####') : setCardNumber(formCardNumber)
  }

  function handleHolderChange(e) {
    setFormHolderName(e.target.value)
  }

  function changeHolder() {
    formHolderName.length === 0 ? setCardHolder('FULL NAME') : setCardHolder(formHolderName)
  }

  function handleCvvChange(e) {
    setFormCvvNumber(e.target.value)
  }

  function changeCvv() {
    formCvvNumber.length === 0 ? setCardCvvNumber('') : setCardCvvNumber(formCvvNumber)
  }

  function changeExpirationMonth(e) {
    e.target.value === 'Month' ? setCardExpirationMonth('MM') : setCardExpirationMonth(e.target.value)
  }

  function changeExpirationYear(e) {
    e.target.value === 'Year' ? setCardExpirationYear('YY') : setCardExpirationYear(e.target.value)
  }


  return (
    <InputDataContext.Provider value={{
      formCardNumber,
      formHolderName,
      formCvvNumber,
      cardNumber,
      cardHolder,
      cardExpirationMonth,
      cardExpirationYear,
      cardCvvNumber,
      handleNumberChange,
      changeCardNumber,
      handleHolderChange,
      changeHolder,
      handleCvvChange,
      changeCvv,
      changeExpirationMonth,
      changeExpirationYear
    }}>
      {props.children}
    </InputDataContext.Provider>
  )
}

export {InputContextProvider, InputDataContext}
