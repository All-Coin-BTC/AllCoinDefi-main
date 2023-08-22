import React, { useEffect, useState } from "react";

export default function WarehousingCard({
  id,
  img,
  name,
  desc,
  apr,
  amtStaked,
  revenue,
  janitorLabor,
  mechanicLabor,
  vanOneCost,
  vanTwoCost,
  leaseCost,
  insuranceCost,
  learnMoreInfo,
}) {
  const laborCostSum = janitorLabor + mechanicLabor;
  const assetCostSum = vanOneCost + vanTwoCost + leaseCost;
  const profit = revenue - laborCostSum - assetCostSum - insuranceCost;

  const [displayLaborCosts, setDisplayLaborCosts] = useState(false);

  useEffect(() => {
    console.log(displayLaborCosts);
  }, [displayLaborCosts]);
  return (
    <div
      key={id}
      className="stake-card-container p-8 mx-4 flex flex-col justify-center items-center rounded-3xl"
    >
      <div className="asset-img">
        <img src={img} className="w-12" />
      </div>
      <div className="asset-name text-white text-4xl text-center">{name}</div>
      <div className="asset-description text-gray-400 text-center text-sm mt-4">
        {desc}
      </div>
      <div className="financial-information flex items-center justify-center gap-4 mt-4 w-full">
        <div className="left-financial-information text-center justify-center items-center w-40">
          <div className="apr-amount text-green-400">
            {(apr * 100).toFixed(1)}%
          </div>
          <div className="apr-info flex justify-center gap-2 items-center">
            <div className="apr-tag text-gray-300 font-light text-sm">APR </div>
            <img src="info.png" className="w-5 h-5" />
          </div>
        </div>
        <div className="line h-14"></div>
        <div className="right-financial-information text-white text-center w-40">
          <div className="dollar-amount-staked">
            ${amtStaked.toLocaleString()}
          </div>
          <div className="amt-tag text-sm text-gray-300 font-light ">
            Staked Now
          </div>
        </div>
      </div>
      <div className="revenue-generated-container mt-4 flex text-white gap-4 w-full justify-between text-sm">
        <div className="left-revenue-text">Revenue Generated:</div>
        <div className="right-revenue-text flex items-center gap-2">
          <div className="dollar-amount">${revenue.toLocaleString()}</div>
          <div className="show-more">
            <img className="w-3" src="/down-filled-triangular-arrow.png" />
          </div>
        </div>
      </div>
      <div className="labor-costs-container mt-4 flex text-white gap-4 w-full justify-between  text-sm">
        <div className="left-labor-text text-md">Labor Costs:</div>
        <div className="right-labor-text flex items-center gap-2">
          <div className="dollar-amount">${laborCostSum.toLocaleString()}</div>
          <div className="show-more">
            <img
              className="w-3"
              src="/down-filled-triangular-arrow.png"
              onClick={() => setDisplayLaborCosts(!displayLaborCosts)}
            />
          </div>
        </div>
      </div>
      <div
        className={`${
          displayLaborCosts
            ? "labor-costs-dropdown-container-active flex flex-col text-white text-xs w-full pr-7 mt-2"
            : "labor-costs-dropdown-container-inactive"
        }`}
      >
        <div className="dropdown-item-1 flex justify-between items-center">
          <div className="left-labor-costs-text">Janitor Labor</div>
          <div className="right-labor-costs-text">${janitorLabor}</div>
        </div>
        <div className="dropdown-item-2 flex justify-between items-center">
          <div className="left-labor-costs-text">Mechanic Labor</div>
          <div className="right-labor-costs-text">${mechanicLabor}</div>
        </div>
      </div>
      <div className="asset-costs-container mt-4 flex text-white gap-4 w-full justify-between  text-sm">
        <div className="left-asset-text text-md">Asset Costs:</div>
        <div className="right-asset-text flex items-center gap-2">
          <div className="dollar-amount">${assetCostSum.toLocaleString()}</div>
          <div className="show-more">
            <img className="w-3" src="/down-filled-triangular-arrow.png" />
          </div>
        </div>
      </div>
      <div className="insurance-costs-container mt-4 flex text-white gap-4 w-full justify-between  text-sm">
        <div className="left-insurance-text text-md">Insurance Costs:</div>
        <div className="right-insurance-text flex items-center gap-2">
          <div className="dollar-amount">${insuranceCost.toLocaleString()}</div>
          <div className="show-more">
            <img className="w-3" src="/down-filled-triangular-arrow.png" />
          </div>
        </div>
      </div>
      <div className="profit-container mt-4 flex text-white gap-4 w-full justify-between">
        <div className="left-profit-text text-md">Profit:</div>
        <div className="dollar-amount">${profit.toLocaleString()}</div>
      </div>
      <div className="stake-btn">
        <button className="text-white mt-8 px-8 py-4 bg-green-400 rounded-xl flex items-center justift-center gap-2">
          <p>Stake</p>
          <img className="w-8" src="Logo 12.png" />
        </button>
      </div>
      <div className="learn-more-btn text-gray-400 text-sm mt-4">
        <u>Learn More</u>
      </div>
    </div>
  );
}
