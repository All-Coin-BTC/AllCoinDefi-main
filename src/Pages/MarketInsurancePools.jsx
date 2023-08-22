import React from "react";
import { dummyMarketInsurance } from "../data/dummyData";
import MarketCard from "../Components/MarketCard";
const data = dummyMarketInsurance;
export default function MarketInsurancePools() {
  return (
    <div className="markets-insurance-page-container text-white">
      <div className="markets-insurance-title text-gray-100 text-center">
        Markets - Insurance Pools
      </div>
      <div className="markets-insurance-subtitle text-gray-300 text-center mb-4 ">
        USDC Staking
      </div>
      <MarketCard data={data} />
    </div>
  );
}
