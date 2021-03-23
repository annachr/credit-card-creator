import React, { useContext } from 'react'
import {CardThemeContext} from '../cardThemeContext'
import ThemeImg from './ThemeImg'


function CardTheme(props) {
  const {
    bgNumber,
    disabledNext,
    disabledPrev,
    nextSlide,
    prevSlide
  } = useContext(CardThemeContext)

  return(
    <div className="themeSection">
      <label>{props.label}</label>
      <div className="gallerySection">
        <button className="arrow" onClick={prevSlide} disabled={disabledPrev}>◂</button>
        <div className="themeGallery">
          <ThemeImg imgNumber={bgNumber}/>
          <ThemeImg imgNumber={bgNumber + 1}/>
          <ThemeImg imgNumber={bgNumber + 2}/>
        </div>
        <button className="arrow" onClick={nextSlide} disabled={disabledNext}>▸</button>
      </div>
    </div>
  )
}

export default CardTheme

