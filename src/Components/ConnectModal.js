import React, { useState } from "react";

const ConnectModal = ({ onClose, onSubmit }) => {
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");

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
            <div className="col-md-12 mb-3">
             <form>
             <div className="form-group">
                <label className="css-1owdu0o">
                  <div className="css-zkfaav">Sell</div>
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="0.00 SUSD"
                  value={field1}
                  onChange={(e) => setField1(e.target.value)}
                  required
                />

                <label className="css-1owdu0o">
                  <div className="css-zkfaav">Connect</div>
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="0.00 BSUSD"
                  value={field2}
                  onChange={(e) => setField2(e.target.value)}
                  required
                />
              </div>
             </form>
            </div>
          </div>

          <div>
            <p>
              <b>Exchange Rate: </b>0.8574 SUSD:bSUSD
            </p>
            <p>
              <b>Price impact: </b>0.0000%
            </p>
          </div>

          <p>Your swap is performed directly in Curve protocol.</p>

          
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

