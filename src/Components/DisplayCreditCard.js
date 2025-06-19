import React from 'react'

import  "./DisplayStyle.css"

function DisplayCreditCard(props) {


      const { holderName,
        cardNumber,
        month,
        year,
        cvc } = props;

  return (
    <div className="container">
      <div className="cardContainer">
        <div className="innerCardContainer">
          {/* Credit Card - Back */}
          <div className="cardBack">
            <div className="backCardContainer">
              <div className='blackLine'>
                </div>
                <div className='cvcNumberDisplay'></div>
              <p>{cvc ? cvc : '000'}</p>
            
            </div>
          </div>
          {/* Credit Card - Front */}
          <div className="cardFront">
            <div className="frontCardContainer">
              <div className="upperLine">
                <span className="dot" />
                <span className="circleOutline"/>
              </div>
              <div>
                <div className="cardNumber">
                  {cardNumber? cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ') : '0000 0000 0000 0000'}
                </div>
                <div className="lowerLine">
                  <p>{holderName ? holderName.toUpperCase() : 'JANE APPLESEED'}</p>
                  <p>{`${month? month : '00'}/${
                    year ? year : '00'
                  }`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DisplayCreditCard