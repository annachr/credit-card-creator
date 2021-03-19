import React from "react"
import CardFront from './CardFront'
import CardBack from './CardBack'
import {useSelector} from 'react-redux'

function Card() {

  const cardAnimation = useSelector(state => state.cardRotateReducer)
  // const themeStyle = {
  //   backgroundColor: `url('./backgrounds/bg14.jpg')`
  // }

  return (
    <div className={`card ${cardAnimation}`}>
        {cardAnimation === '' ? <CardFront /> : <CardBack />}
    </div>
  )
}

export default Card
