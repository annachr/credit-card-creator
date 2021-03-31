import React, { useState } from 'react'
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

  /*WARNING MESSAGE*/
  const [showWarningMessage, setShowWarningMessage] = useState(false)

  function handleNumberChange(e) {
    setFormCardNumber(e.target.value
      .replace(/[^0-9.]/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .replace(/(^\s+|\s+$)/,'')
    )
  }

  function changeCardNumber() {
    formCardNumber.length === 0
      ? setCardNumber('#### #### #### ####')
      : setCardNumber(formCardNumber)
  }

  function handleHolderChange(e) {
    setFormHolderName(e.target.value.toUpperCase())
  }

  function changeHolder(e) {
    if ((e.keyCode > 64 && e.keyCode < 91) || e.keyCode === 32 || e.keyCode === 18) {
      setCardHolder(formHolderName)
    } else if (formHolderName.length === 0) {
      setCardHolder('FULL NAME')
    }
  }

  function handleCvvChange(e) {
    setFormCvvNumber(e.target.value)
  }

  function changeCvv() {
    formCvvNumber.length === 0 ? setCardCvvNumber('') : setCardCvvNumber(formCvvNumber.replace(/[^0-9.]/g, ''))
  }

  function changeExpirationMonth(e) {
    e.target.value === 'Month' ? setCardExpirationMonth('MM') : setCardExpirationMonth(e.target.value)
  }

  function changeExpirationYear(e) {
    e.target.value === 'Year' ? setCardExpirationYear('YY') : setCardExpirationYear(e.target.value)
  }

  function submitCardData(e) {
    e.preventDefault()
    if (formCardNumber === '' || formHolderName === '' || formCvvNumber === '') {
      setShowWarningMessage(true)
    } else if (formCardNumber !== '' && formHolderName !== '' && formCvvNumber !== '') {
      setShowWarningMessage(false)
    }
  }

  function clearData() {
    window.location.reload()
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
      changeExpirationYear,
      clearData,
      submitCardData,
      showWarningMessage
    }}>
      {props.children}
    </InputDataContext.Provider>
  )
}

export {InputContextProvider, InputDataContext}

