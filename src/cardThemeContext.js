import React, {useState} from 'react'
const CardThemeContext = React.createContext()

function CardThemeContextProvider(props) {
  const [bgNumber, setBgNumber] = useState(1)
  const [disabledNext, setDisabledNext] = useState(false)
  const [disabledPrev, setDisabledPrev] = useState(true)
  const [cardStyle, setCardStyle] = useState(1)

  function nextSlide(e) {
    e.preventDefault()
    setBgNumber(bgNumber + 1)
    setDisabledPrev(false)
    if (bgNumber === 13) {
      setBgNumber(13)
      setDisabledNext(true)
    }
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

  function changeTheme() {
    setCardStyle(bgNumber)
  }

  return (
    <CardThemeContext.Provider value={{
      bgNumber,
      disabledNext,
      disabledPrev,
      nextSlide,
      prevSlide,
      cardStyle,
      changeTheme
    }}>
      {props.children}
    </CardThemeContext.Provider>
  )
}

export {CardThemeContextProvider, CardThemeContext}
