import React from "react";
import MarketCard from "../Components/MarketCard";
import { dummyFixedAssets } from "../data/dummyData";
const data = dummyFixedAssets;
export default function MarketFixedAssets() {
  return (
    <div className="markets-fixed-assets-page-container text-white">
      <div className="markets-fixed-assets-title text-gray-100 text-center">
        Markets - Fixed Assets
      </div>
      <div className="markets-fixed-assets-subtitle text-gray-300 text-center mb-4 ">
        BTC Staking
      </div>
      <MarketCard data={data} />
    </div>
  );
}
