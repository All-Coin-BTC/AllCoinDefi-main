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
    <>
      <div className="dashit">
        <div className="row">
          <div className="col-lg-12">
            <div id="dash" className="col-md-5">
              <div id="content">
                <h2 id="headeing">
                Working on it
                </h2>
                <p>
                  <b>yet to be done</b>
                </p>
                

                <div className="col-md-12 text-center">
                  <button
                    id="submitbut"
                    type="button" // Change to "button" instead of "submit"
                    className="button button-a button-big button-rounded"
                  >
                    Stake
                  </button>
                </div>
              </div>
            </div>
            <div id="dash" className="col-md-5">
            <div id="content">
                <h2 id="headeing">
                Working on it
                </h2>
                <p>
                  <b>yet to be done</b>
                </p>
                

                <div className="col-md-12 text-center">
                  <button
                    id="submitbut"
                    type="button" // Change to "button" instead of "submit"
                    className="button button-a button-big button-rounded"
                  >
                    Stake
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
