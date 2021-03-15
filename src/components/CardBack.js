import React from "react"
import { useSelector } from 'react-redux'

function CardBack() {

  const cardAnimation = useSelector(state => state.cardRotateReducer)

  return (
    <div className={`cardBackWrapper ${cardAnimation}`}>
      <div className="blackLine"> </div>
      <div className="backBottomSection">
        <div className="cvvSection">
          <span>CVV</span>
          <div className="cvvNumber"> </div>
        </div>
        <em><span className="visaLogo backLogo">VISA</span></em>
      </div>

    </div>
  )
}

export default CardBack
