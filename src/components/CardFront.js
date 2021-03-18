import React, {useContext} from "react"
import { useSelector } from 'react-redux'
import {InputDataContext} from '../inputDataContext'

function CardFront() {
  const {cardNumber, cardHolder, cardExpirationMonth, cardExpirationYear} = useContext(InputDataContext)
  // const {cardHolder, cardExpiration} = useSelector(state => state.cardDataReducer)
  const activeStyle = useSelector(state => state.activeStyleReducer)
  // const cardAnimation = useSelector(state => state.cardRotateReducer)

  return (
    <div className="cardFrontWrapper">
      <div className="cardTopSection">
        <span className="hologram"> </span>
        <em><span className="visaLogo">VISA</span></em>
      </div>
      <div className={`cardNumberSection ${activeStyle}`}>
        <p>{cardNumber}</p>
      </div>
      <div className="cardBottomSection">
        <div className={`cardData holder ${activeStyle}`}>
          <span className="data">Card Holder</span>
          <span className="dataDetail">{cardHolder}</span>
        </div>
        <div className={`cardData expiration ${activeStyle}`}>
          <span className="data">Expires</span>
          <p><span className="dataDetail">{cardExpirationMonth}</span>/<span className="dataDetail">{cardExpirationYear}</span></p>
        </div>
      </div>
    </div>
  )
}

export default CardFront
