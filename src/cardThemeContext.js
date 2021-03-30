import React, {useState} from 'react'
const CardThemeContext = React.createContext()

function CardThemeContextProvider(props) {
  const [disabledNext, setDisabledNext] = useState(false)
  const [disabledPrev, setDisabledPrev] = useState(true)
  const [cardStyle, setCardStyle] = useState(1)
  const [showTheme, setShowTheme] = useState(false)

  function showThemeSection(e) {
    e.preventDefault()
    setShowTheme(!showTheme)
  }

  function nextSlide(e) {
    e.preventDefault()
    setCardStyle(cardStyle + 1)
    setDisabledPrev(false)
    if (cardStyle === 14) {
      setDisabledNext(true)
    }
  }

  function prevSlide(e) {
    e.preventDefault()
    setCardStyle(cardStyle - 1)
    setDisabledNext(false)
    if (cardStyle === 2) {
      setDisabledPrev(true)
    }
  }

  return (
    <CardThemeContext.Provider value={{
      disabledNext,
      disabledPrev,
      cardStyle,
      showTheme,
      nextSlide,
      prevSlide,
      showThemeSection
    }}>
      {props.children}
    </CardThemeContext.Provider>
  )
}

export {CardThemeContextProvider, CardThemeContext}
