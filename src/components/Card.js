import React, { useContext } from "react"
import CardFront from './CardFront'
import CardBack from './CardBack'
import {useSelector} from 'react-redux'
import {CardThemeContext} from '../cardThemeContext'


function Card() {
  const {cardStyle} = useContext(CardThemeContext)
  const cardAnimation = useSelector(state => state.cardRotateReducer)
  const image = require(`../backgrounds/bg${cardStyle}.jpg`).default

  const themeStyle = {
    backgroundImage: `url(${image})`
  }

  return (
    <div className={`card ${cardAnimation}`} style={themeStyle}>
        {cardAnimation === '' ? <CardFront /> : <CardBack />}
    </div>
  )
}

export default Card
