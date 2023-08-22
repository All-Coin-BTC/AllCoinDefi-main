import React from "react";
import { allCoinPools } from "../data/dummyData";
import MarketCard from "../Components/MarketCard";
const data = allCoinPools;
export default function MarketAllCoin() {
  return (
    <div className="markets-stable-coins-page-container text-white">
      <div className="markets-stable-coins-title text-gray-100 text-center">
        Markets - AllCoin
      </div>
      <div className="markets-stable-coins-subtitle text-gray-300 text-center mb-4 ">
        AllCoin Staking
      </div>
      <MarketCard data={data} />
    </div>
  );
}
