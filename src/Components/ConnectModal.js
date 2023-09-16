import React, { useState } from "react";
import Satoshi from "../assets/images/satoshi.png";
import Blue from "../assets/images/bluewallet.png";
import Breez from "../assets/images/Breezwallet.png";
import Alby from "../assets/images/albywallet.jpg";

const ConnectModal = ({ onClose, onSubmit }) => {
  const handleConnectSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // For example, you can get the form data and handle the Connect process
    // const formData = new FormData(e.target);
    // const amount = formData.get("amount");
    // const address = formData.get("address");
    // Perform the Connect operation with 'amount' and 'address' data

    // Close the modal
    onClose();
  };

  return (
    <div className="modal" style={modalStyle}>
      <div className="modal-content" style={modalContentStyle}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h3 style={header}>CONNECT TO LIGHTNING WALLET</h3>
        <div className="maincard">
          <div className="stake">
          
              <div className="card">
                <div className="card-body d-flex">
                  <img src={Satoshi} className="card-img-left" alt="..." />
                  <div className="card-content">
                    <h5 className="card-title">
                      <a
                        href="https://www.walletofsatoshi.com/?ref=bitrefill.com"
                        target="_blank"
                      >
                        Wallet of Satoshi
                      </a>
                    </h5>
                    <p className="card`-text">Availiable on IoS and Android</p>
                  </div>
                </div>
              </div>
              <hr />

              <div className="card">
                <div className="card-body d-flex">
                  <img src={Blue} className="card-img-left" alt="..." />

                  <div className="card-content">
                    <h5 className="card-title">
                      <a
                        href="https://bluewallet.io/?ref=bitrefill.com"
                        target="_blank"
                      >
                        Bluewallet
                      </a>
                    </h5>
                    <p className="card-text">Availiable on IoS and Android</p>
                  </div>
                </div>
              </div>
              <hr />

              <div className="card">
                <div className="card-body d-flex">
                  <img src={Breez} className="card-img-left" alt="..." />
                  <div className="card-content">
                    <h5 className="card-title">
                      <a
                        href="https://breez.technology/?ref=bitrefill.com"
                        target="_blank"
                      >
                        Breez
                      </a>
                    </h5>
                    <p className="card-text">Availiable on IoS and Android</p>
                  </div>
                </div>
              </div>
              <hr />

              <div className="card">
                <div className="card-body d-flex">
                  <img src={Alby} className="card-img-left" alt="..." />
                  <div className="card-content">
                    <h5 className="card-title">
                      <a
                        href="https://getalby.com/?ref=bitrefill.com"
                        target="_blank"
                      >
                        Alby
                      </a>
                    </h5>
                    <p className="card-text">
                      Browser Extension (Chrome & Firefox)
                    </p>
                  </div>
                </div>
              </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectModal;

// Inline CSS styles for the modal
const header = {
  textAlign: "center",
  color: "#12b695",
};
const modalStyle = {
  display: "block",
  position: "fixed",
  zIndex: "9999",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
};

const modalContentStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  backgroundColor: "rgb(41, 40, 40)",
  borderRadius: "8px",
  padding: "20px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
};
