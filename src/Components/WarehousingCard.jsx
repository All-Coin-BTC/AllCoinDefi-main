import React, { useEffect, useState } from "react";
import stakeIcon from "../assets/images/Logo-coin.png";
import img from "../assets/images/capital-venture.png";

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

  const [expandedRows, setExpandedRows] = useState([]);

  const toggleSubRows = (index) => {
    if (expandedRows.includes(index)) {
      setExpandedRows(expandedRows.filter((rowIndex) => rowIndex !== index));
    } else {
      setExpandedRows([...expandedRows, index]);
    }
  };

  const data = [
    {
      mainColumn1: "Revenue Generated:",
      mainColumn2: revenue.toLocaleString(),
    },
    { mainColumn1: "Labor Costs:", mainColumn2: laborCostSum.toLocaleString() },
    { mainColumn1: "Asset Costs:", mainColumn2: assetCostSum.toLocaleString() },
    {
      mainColumn1: "Insurance Costs:",
      mainColumn2: insuranceCost.toLocaleString(),
    },
    // more main-rows
  ];

  const subRowData = [
    [
      // ["row1", "price"],
      // ["row2", "price"],
    ],
    [
      ["Janitor Labor", janitorLabor],
      ["Mechanic Labor", mechanicLabor],
    ],
    [
      // ["row1", "price"],
      // ["row2", "price"],
    ],
    [
      // ["row1", "price"],
      // ["row2", "price"],
    ],
  ];

  useEffect(() => {
    console.log(displayLaborCosts);
  }, [displayLaborCosts]);

  return (
    <>
      <div key={id} id="dash" className="col-md-5 mx-auto">
        <div className="custom-card">
          <div className="custom-card-img">
            <img src={img} alt="Profile" />
          </div>
          <div className="custom-desc">
            <h6 className="custom-primary-text">{name}</h6>
            <h6 className="custom-secondary-text">{desc}</h6>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <div className="custom-details">
            <div className="custom-rating">
              <h6 className="custom-primary-text">{(apr * 100).toFixed(1)}%</h6>
              <h6 className="custom-secondary-text">APR</h6>
            </div>
            <div className="custom-activity">
              <h6 className="custom-primary-text">
                ${amtStaked.toLocaleString()}
              </h6>
              <h6 className="custom-secondary-text">Staked Now</h6>
            </div>
          </div>

          <br></br>
          <br></br>

          {/* table */}
          <table className="custom-table">
            <tbody>
              {data.map((item, index) => (
                <React.Fragment key={index}>
                  <tr className="main-row" onClick={() => toggleSubRows(index)}>
                    <td id="tdata">{item.mainColumn1}</td>
                    <td id="tdata">
                      ${item.mainColumn2}
                      <span
                        className={`dropdown-icon ${
                          expandedRows.includes(index) ? "open" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </td>
                  </tr>
                  {expandedRows.includes(index) && (
                    <>
                      {subRowData[index].map((subRow, subRowIndex) => (
                        <tr className="sub-row" key={subRowIndex}>
                          <td colSpan={2}>
                            <div className="sub-row-content">
                              <div>{subRow[0]}</div>
                              <div>${subRow[1]}</div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </>
                  )}
                </React.Fragment>
              ))}
            </tbody>
            <p id="totalcontent">
              <span id="total">Profit:</span>
              <span id="totalprice">${profit.toLocaleString()}</span>
            </p>
          </table>
        </div>
        <div className="col-md-12 text-center">
          <button
            id="submitbut"
            type="button"
            className="button button-a button-big button-rounded"
          >
            <b>Stake</b>
            <img src={stakeIcon} alt="Stake Icon" className="icon" />{" "}
          </button>
          <div className="learn-more-btn text-sm mt-4">
            <p id="learnmore">Learn More</p>
          </div>
        </div>
      </div>
    </>
  );
}
