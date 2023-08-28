import React from "react";
import web3 from "../web3"; // Import the web3 instance
import "../assets/css/dashboard.css";
// import Stack from "./dashboard/Stack";
import Warehousing from "./Warehousing";

const Homepage = () => {
  return (
    <div>
      <Warehousing />
    </div>
  );
};

export default Homepage;
