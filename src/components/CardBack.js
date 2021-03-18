import React, { useContext } from "react"
import { useSelector } from 'react-redux'
import { InputDataContext } from '../inputDataContext'

function CardBack() {
  const {cardCvvNumber} = useContext(InputDataContext)
  const cardAnimation = useSelector(state => state.cardRotateReducer)

  return (
    <div className={`cardBackWrapper face ${cardAnimation}`}>
      <div className="blackLine"> </div>
      <div className="backBottomSection">
        <div className="cvvSection">
          <span>CVV</span>
          <div className="cvvNumber">{cardCvvNumber}</div>
        </div>
        <em><span className="visaLogo backLogo">VISA</span></em>
      </div>

    </div>
  )
}

export default CardBack
