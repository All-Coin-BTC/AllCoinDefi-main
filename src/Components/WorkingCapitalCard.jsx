import React from "react";

export default function LogisticsCard({
  id,
  img,
  name,
  desc,
  apr,
  amtStaked,
  revenue,
  driverLabor,
  maintenanceLabor,
  gasolineCost,
  logisticsInsuranceCost,
  learnMoreInfo,
  janitorLabor,
  mechanicLabor,
  vanOneCost,
  vanTwoCost,
  leaseCost,
  warehouseInsuranceCost,
}) {
  const logisticsLaborCostSum = driverLabor + maintenanceLabor;
  const warehouseLaborCostSum = janitorLabor + mechanicLabor;
  const laborCostSum = warehouseLaborCostSum + logisticsLaborCostSum;

  const suppliesCostSum = gasolineCost;

  const warehouseAssetCostSum = vanOneCost + vanTwoCost + leaseCost;

  const insuranceCostSum = logisticsInsuranceCost + warehouseInsuranceCost;
  const profit =
    revenue -
    warehouseAssetCostSum -
    laborCostSum -
    suppliesCostSum -
    insuranceCostSum;
  return (
    <>
      <div
        key={id}
        className="stake-card-container p-8 mx-4 flex flex-col justify-center items-center rounded-3xl"
      >
        <div className="asset-img">
          <img src={img} className="w-12" />
        </div>
        <div className="asset-name text-white text-4xl text-center">
          Working Capital
        </div>
        <div className="asset-description text-gray-400 text-center text-sm mt-4">
          {desc}
        </div>
        <div className="financial-information flex items-center justify-center gap-4 mt-4 w-full">
          <div className="left-financial-information text-center justify-center items-center w-40">
            <div className="apr-amount text-green-400">
              {(apr * 100).toFixed(1)}%
            </div>
            <div className="apr-info flex justify-center gap-2 items-center">
              <div className="apr-tag text-gray-300 font-light text-sm">
                APR{" "}
              </div>
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
        <div className="asset-costs-container mt-4 flex text-white gap-4 w-full justify-between  text-sm">
          <div className="left-asset-text text-md">Fixed Asset Costs:</div>
          <div className="right-asset-text flex items-center gap-2">
            <div className="dollar-amount">
              ${warehouseAssetCostSum.toLocaleString()}
            </div>
            <div className="show-more">
              <img className="w-3" src="/down-filled-triangular-arrow.png" />
            </div>
          </div>
        </div>
        <div className="labor-costs-container mt-4 flex text-white gap-4 w-full justify-between  text-sm">
          <div className="left-labor-text text-md">Labor Costs:</div>
          <div className="right-labor-text flex items-center gap-2">
            <div className="dollar-amount">
              ${laborCostSum.toLocaleString()}
            </div>
            <div className="show-more">
              <img className="w-3" src="/down-filled-triangular-arrow.png" />
            </div>
          </div>
        </div>
        <div className="asset-costs-container mt-4 flex text-white gap-4 w-full justify-between  text-sm">
          <div className="left-asset-text text-md">Supplies Costs:</div>
          <div className="right-asset-text flex items-center gap-2">
            <div className="dollar-amount">
              ${suppliesCostSum.toLocaleString()}
            </div>
            <div className="show-more">
              <img className="w-3" src="/down-filled-triangular-arrow.png" />
            </div>
          </div>
        </div>
        <div className="insurance-costs-container mt-4 flex text-white gap-4 w-full justify-between  text-sm">
          <div className="left-insurance-text text-md">Insurance Costs:</div>
          <div className="right-insurance-text flex items-center gap-2">
            <div className="dollar-amount">
              ${insuranceCostSum.toLocaleString()}
            </div>
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
            <img className="w-8" src="usdc.png" />
          </button>
        </div>
        <div className="learn-more-btn text-gray-400 text-sm mt-4">
          <u>Learn More</u>
        </div>
      </div>

      <div
        key={id}
        className="stake-card-container p-8 mx-4 flex flex-col justify-center items-center rounded-3xl mt-6"
      >
        <div className="asset-img">
          <img src="/asset-management.png" className="w-12" />
        </div>
        <div className="asset-name text-white text-4xl text-center">
          Working Capital Allocation
        </div>
        <div className="asset-description text-gray-400 text-center text-sm mt-4">
          Warehousing
        </div>

        <div className="revenue-generated-container mt-4 flex text-white gap-4 w-full justify-between text-sm">
          <div className="left-revenue-text">Fixed Assets</div>
          <div className="right-revenue-text flex items-center gap-2">
            <div className="dollar-amount">21%</div>
            <div className="show-more">
              <img className="w-3" src="/down-filled-triangular-arrow.png" />
            </div>
          </div>
        </div>
        <div className="asset-costs-container mt-4 flex text-white gap-4 w-full justify-between  text-sm">
          <div className="left-asset-text text-md">Supplies</div>
          <div className="right-asset-text flex items-center gap-2">
            <div className="dollar-amount">5%</div>
            <div className="show-more">
              <img className="w-3" src="/down-filled-triangular-arrow.png" />
            </div>
          </div>
        </div>
        <div className="labor-costs-container mt-4 flex text-white gap-4 w-full justify-between  text-sm">
          <div className="left-labor-text text-md">Insurance</div>
          <div className="right-labor-text flex items-center gap-2">
            <div className="dollar-amount">12%</div>
            <div className="show-more">
              <img className="w-3" src="/down-filled-triangular-arrow.png" />
            </div>
          </div>
        </div>
        <div className="asset-costs-container mt-4 flex text-white gap-4 w-full justify-between  text-sm">
          <div className="left-asset-text text-md">Lease</div>
          <div className="right-asset-text flex items-center gap-2">
            <div className="dollar-amount">11%</div>
            <div className="show-more">
              <img className="w-3" src="/down-filled-triangular-arrow.png" />
            </div>
          </div>
        </div>
        <div className="insurance-costs-container mt-4 flex text-white gap-4 w-full justify-between  text-sm">
          <div className="left-insurance-text text-md">Contractors</div>
          <div className="right-insurance-text flex items-center gap-2">
            <div className="dollar-amount">8%</div>
            <div className="show-more">
              <img className="w-3" src="/down-filled-triangular-arrow.png" />
            </div>
          </div>
        </div>
        <div className="asset-description text-gray-400 text-center text-sm mt-4">
          Logistics
        </div>
        <div className="asset-costs-container mt-4 flex text-white gap-4 w-full justify-between  text-sm">
          <div className="left-asset-text text-md">Drivers</div>
          <div className="right-asset-text flex items-center gap-2">
            <div className="dollar-amount">17%</div>
            <div className="show-more">
              <img className="w-3" src="/down-filled-triangular-arrow.png" />
            </div>
          </div>
        </div>
        <div className="asset-costs-container mt-4 flex text-white gap-4 w-full justify-between  text-sm">
          <div className="left-asset-text text-md">Gasoline</div>
          <div className="right-asset-text flex items-center gap-2">
            <div className="dollar-amount">14%</div>
            <div className="show-more">
              <img className="w-3" src="/down-filled-triangular-arrow.png" />
            </div>
          </div>
        </div>
        <div className="asset-costs-container mt-4 flex text-white gap-4 w-full justify-between  text-sm">
          <div className="left-asset-text text-md">Routes</div>
          <div className="right-asset-text flex items-center gap-2">
            <div className="dollar-amount">12%</div>
            <div className="show-more">
              <img className="w-3" src="/down-filled-triangular-arrow.png" />
            </div>
          </div>
        </div>
        <div className="profit-container mt-4 flex text-white gap-4 w-full justify-between">
          <div className="left-profit-text text-md"></div>
          <div className="dollar-amount"></div>
        </div>
      </div>
    </>
  );
}
