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

  console.log('nextSlide', nextSlide)

  return(
    <div className="themeSection">
      <label>{props.label}</label>
      <div className="gallerySection">
        <button className="arrow" onClick={prevSlide} disabled={disabledPrev}>◂</button>
        <div className="themeGallery">
         <ThemeImg imgNumber={bgNumber}/>
          {/*<img src={require('../backgrounds/bg' + 1 + '.jpg').default} className='smallImg' alt="background"/>*/}
          {/*<img src={require('../backgrounds/bg' + 2 + '.jpg').default} className='smallImg' alt="background"/>*/}
          {/*<img src={require('../backgrounds/bg' + 3 + '.jpg').default} className='smallImg' alt="background"/>*/}
        </div>
        <button className="arrow" onClick={nextSlide} disabled={disabledNext}>▸</button>
      </div>
    </div>
  )
}

export default CardTheme

