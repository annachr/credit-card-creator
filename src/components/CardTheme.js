import React, { useContext } from 'react'
import {CardThemeContext} from '../cardThemeContext'
import ThemeImg from './ThemeImg'

function CardTheme() {
  const {
    disabledNext,
    disabledPrev,
    nextSlide,
    prevSlide,
    showTheme,
    showThemeSection
  } = useContext(CardThemeContext)

  return(
    <div className="themeSection">
      <button className='btn' onClick={showThemeSection}>Change Card Theme</button>
      <div className="gallerySection" style={{display: showTheme ? 'grid' : 'none'}}>
        <button className="arrow" onClick={prevSlide} disabled={disabledPrev}>◂</button>
        <div className="themeGallery" >
          <ThemeImg />
        </div>
        <button className="arrow" onClick={nextSlide} disabled={disabledNext}>▸</button>
      </div>
    </div>
  )
}

export default CardTheme

