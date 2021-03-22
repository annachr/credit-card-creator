import React from 'react'

function ThemeImg(props) {
  return (
    <img
      src={require('../backgrounds/bg' + props.imgNumber + '.jpg').default}
      className='smallImg'
      alt="background"
    />
  )
}

export default ThemeImg
