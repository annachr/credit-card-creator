import React, { useContext } from 'react'
import {CardThemeContext} from '../cardThemeContext'

function ThemeImg() {
  const {cardStyle} = useContext(CardThemeContext)

  return (
    <img
      src={require(`../backgrounds/bg${cardStyle}.jpg`).default}
      // src={require('../backgrounds/bg' + props.imgNumber + '.jpg').default}
      alt="background"
      className='smallImg'
    />
  )
}

export default ThemeImg
