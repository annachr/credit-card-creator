import React, {useState} from 'react'
const CardThemeContext = React.createContext()

function CardThemeContextProvider(props) {
  const [bgNumber, setBgNumber] = useState(1)
  const [disabledNext, setDisabledNext] = useState(false)
  const [disabledPrev, setDisabledPrev] = useState(true)

  function nextSlide(e) {
    e.preventDefault()
    setBgNumber(bgNumber + 1)
    setDisabledPrev(false)
    if (bgNumber === 15) {
      setBgNumber(15)
      setDisabledNext(true)
    }
    console.log(bgNumber)
  }

  function prevSlide(e) {
    e.preventDefault()
    setBgNumber(bgNumber - 1)
    setDisabledNext(false)
    if (bgNumber === 1) {
      setBgNumber(1)
      setDisabledPrev(true)
    }
  }

  return (
    <CardThemeContext.Provider value={{
      bgNumber,
      disabledNext,
      disabledPrev,
      nextSlide,
      prevSlide
    }}>
      {props.children}
    </CardThemeContext.Provider>
  )
}

export {CardThemeContextProvider, CardThemeContext}
