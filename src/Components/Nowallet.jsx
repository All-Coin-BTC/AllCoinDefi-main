import React from "react";

const Nowallet = ({ connectWallet }) => {
  return (
    <div
      id="main-slide"
      className="carousel slide carousel-fade"
      data-ride="carousel"
    >
      {/* Carousel Inner Starts */}
      <div className="carousel-inner">
        {/* Carousel Item Starts */}
        <div className="item active bg-parallax item-1">
          <div className="slider-content">
            <div className="container">
              <div className="slider-text text-center">
              <h3 className="slide-title">
                      <span>REDUCING</span> the <span>BARRIER</span> Of
                      <br />
                      ENTRY IN COMMERCE
                    </h3>
                <p>
                  <button
                
                    className="connect-btn"
                    onClick={connectWallet}
                  >
                    Enter App
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Carousel Item Ends */}
      </div>
      {/* Carousel Inner Ends */}
    </div>
  );
};

export default Nowallet;
