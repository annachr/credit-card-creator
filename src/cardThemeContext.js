import React, {useState} from 'react'
const CardThemeContext = React.createContext()

function CardThemeContextProvider(props) {
  const [bgNumber, setBgNumber] = useState(1)
  const [disabledNext, setDisabledNext] = useState(false)
  const [disabledPrev, setDisabledPrev] = useState(true)
  const [cardStyle, setCardStyle] = useState(1)
  const [showTheme, setShowTheme] = useState(false)

  function showThemeSection(e) {
    e.preventDefault()
    setShowTheme(!showTheme)
  }

  function changeTheme() {
    setCardStyle(bgNumber + 1)
  }

  function changeThemeBack() {
    setCardStyle(bgNumber - 1)

  }

  function nextSlide(e) {
    e.preventDefault()
    setBgNumber(bgNumber + 1)
    setDisabledPrev(false)
    if (bgNumber === 14) {
      // setBgNumber(15)
      setDisabledNext(true)
    }
    changeTheme()
    console.log(bgNumber)
  }

  function prevSlide(e) {
    e.preventDefault()
    setBgNumber(bgNumber - 1)
    setDisabledNext(false)
    if (bgNumber === 2) {
      // setBgNumber(1)
      setDisabledPrev(true)
    }
    changeThemeBack()
  }


  return (
    <CardThemeContext.Provider value={{
      bgNumber,
      disabledNext,
      disabledPrev,
      nextSlide,
      prevSlide,
      cardStyle,
      changeTheme,
      showThemeSection,
      showTheme
    }}>
      {props.children}
    </CardThemeContext.Provider>
  )
}

export {CardThemeContextProvider, CardThemeContext}
