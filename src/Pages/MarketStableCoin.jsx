import React from "react";
import { dummyStableCoinPools } from "../data/dummyData";
import MarketCard from "../Components/MarketCard";
const data = dummyStableCoinPools;
export default function MarketStableCoins() {
  return (
    <div className="markets-stable-coins-page-container text-white">
      <div className="markets-stable-coins-title text-gray-100 text-center">
        Markets - Stable Coins
      </div>
      <div className="markets-stable-coins-subtitle text-gray-300 text-center mb-4 ">
        USDC Staking
      </div>
      <MarketCard data={data} />
    </div>
  );
}
