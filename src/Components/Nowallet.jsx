import React, { useState, useEffect } from "react";
import web3 from "../web3";
import ConnectModal from "./ConnectModal"

const Nowallet = ({ connectWallet }) => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);

  useEffect(() => {
    const checkWalletConnection = async () => {
      if (web3.currentProvider) {
        try {
          await web3.currentProvider.request({ method: "eth_requestAccounts" });
          const accounts = await web3.eth.getAccounts();
          const isConnected = accounts.length > 0;
          setIsWalletConnected(isConnected);
        } catch (error) {
          console.error("Failed to connect the wallet:", error);
        }
      }
    };

    checkWalletConnection();
  }, []);

  const handleConnectModalClick = () => {
    setIsConnectModalOpen(true);
  };

  const handleCloseConnectModal = () => {
    setIsConnectModalOpen(false);
  };

  const handleConnectSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // For example, you can get the form data and handle the Connect process
    // const formData = new FormData(e.target);
    // const amount = formData.get("amount");
    // const address = formData.get("address");
    // Perform the Connect operation with 'amount' and 'address' data
    // Close the modal

    handleCloseConnectModal();
  };

  return (
    <>
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
                      onClick={handleConnectModalClick}
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
      {/* Render the ConnectModal if isConnectModalOpen is true */}
      {isConnectModalOpen && (
        <ConnectModal onClose={handleCloseConnectModal} onSubmit={handleConnectSubmit} />
      )}
    </>
  );
};

export default Nowallet;
