import React from "react"

function Card() {
  return (
    <div className="card">
      <div className="cardWrapper">
        <div className="cardTopSection">
          <span className="hologram"> </span>
          <em><span className="visaLogo">VISA</span></em>
        </div>
        <div className="cardNumberSection">
          <p>#### #### #### ####</p>
        </div>
        <div className="cardBottomSection">
          <div className="cardData holder">
            <span className="data">Card Holder</span>
            <span className="dataDetail">FULL NAME</span>
          </div>
          <div className="cardData expiration">
            <span className="data">Expires</span>
            <span className="dataDetail">MM/YY</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
