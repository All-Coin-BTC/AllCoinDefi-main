import React from 'react'
import stakeIcon from "../assets/images/Logo-coin.png";


export default function InsuranceCard({
    id,
    img,
    name,
    desc,
    apr,
    amtStaked,
    learnMoreInfo,
  }) {
  return (
  <>
  <div key={id} id="dash" className="col-md-5 mx-auto">
        <div className="custom-card">
          <div className="custom-card-img">
            <img src={img} alt="Profile" />
          </div>
          <div className="custom-desc">
            <h6 className="custom-primary-text">{name}</h6>
            <h6 className="custom-secondary-text">{desc}</h6>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <div className="custom-details">
            <div className="custom-rating">
              <h6 className="custom-primary-text">{(apr * 100).toFixed(1)}%</h6>
              <h6 className="custom-secondary-text">APR</h6>
            </div>
            <div className="custom-activity">
              <h6 className="custom-primary-text">
                ${amtStaked.toLocaleString()}
              </h6>
              <h6 className="custom-secondary-text">Staked Now</h6>
            </div>
          </div>

          <br></br>
          <br></br>
        </div>
        <div className="col-md-12 text-center">
          <button
            id="submitbut"
            type="button"
            className="button button-a button-big button-rounded"
          >
            <b>Stake</b>
            <img src={stakeIcon} alt="Stake Icon" className="icon" />{" "}
          </button>
          <div className="learn-more-btn text-sm mt-4">
            <p id="learnmore">Learn More</p>
          </div>
        </div>
      </div>
  </>
   
  )
}
