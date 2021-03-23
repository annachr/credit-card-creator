import React, { useContext } from 'react'
import {CardThemeContext} from '../cardThemeContext'

function ThemeImg(props) {
  const {changeTheme} = useContext(CardThemeContext)

  return (
    <img
      onClick={changeTheme}
      src={require('../backgrounds/bg' + props.imgNumber + '.jpg').default}
      className='smallImg'
      alt="background"
    />
  )
}

export default ThemeImg
