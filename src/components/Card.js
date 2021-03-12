import React from "react"
import {useSelector} from 'react-redux'

function Card() {

  const {cardNumber, cardHolder, cardExpiration} = useSelector(state => state.cardDataReducer)
  const activeStyle = useSelector(state => state.activeStyleReducer)

  return (
    <div className="card">
      <div className="cardWrapper">
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
            <p><span className="dataDetail">{cardExpiration.month}</span>/<span className="dataDetail">{cardExpiration.year}</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
