import React from 'react'

function ThemeImg(props) {

  return (
    <img
      src={require('../backgrounds/bg' + props.imgNumber + '.jpg').default}
      alt="background"
      className='smallImg'
    />
  )
}

export default ThemeImg
