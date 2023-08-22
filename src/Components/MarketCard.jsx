import React from "react";

export default function MarketCard({ data }) {
  return (
    <div className="markets-fixed-assets-card-container py-8 mx-4 flex flex-col justify-evenly items-center rounded-3xl bg-gray-800">
      {data.map((item) => (
        <div className="fixed-asset-container flex items-center justify-center text-sm w-full gap-6 my-6">
          <div className="fixed-asset-title text-base text-center font-bold w-20">
            {item.name}
          </div>
          <div className="line h-20"></div>
          <div className="fixed-asset-details flex flex-col justify-between">
            <div className="top-row flex items-center justify-between">
              <div className="apr-container flex flex-col items-center ">
                <div className="apr-amount">{(item.apr * 100).toFixed(2)}%</div>
                <div className="apr-label font-light">APR</div>
              </div>
              <div className="total-staked-container flex flex-col items-center">
                <div className="total-staked-amount items-center">
                  ${item.amtStaked.toLocaleString()}
                </div>
                <div className="total-staked-label items-center font-light">
                  Staked Now
                </div>
              </div>
            </div>
            <div className="bottom-row  flex items-center justify-center">
              <button className="px-4 py-3 bg-white text-black rounded-3xl mt-2 flex gap-2 items-center">
                Stake Now
                <img src={item.currencyImg} className="w-6" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
