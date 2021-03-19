import React, { useContext } from 'react'
import {CardThemeContext} from '../cardThemeContext'

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
          <img src={require('../backgrounds/bg' + bgNumber + '.jpg').default} className='smallImg' alt="background"/>
          <img src={require('../backgrounds/bg' + bgNumber + '.jpg').default} className='smallImg' alt="background"/>
          <img src={require('../backgrounds/bg' + bgNumber + '.jpg').default} className='smallImg' alt="background"/>
        </div>
        <button className="arrow" onClick={nextSlide} disabled={disabledNext}>▸</button>
      </div>
    </div>
  )
}

export default CardTheme

