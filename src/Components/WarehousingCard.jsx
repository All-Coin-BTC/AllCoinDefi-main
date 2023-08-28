import React, { useEffect, useState } from "react";
import ware from "../assets/images/capital-venture.png";
import stakeIcon from "../assets/images/Logo-coin.png";

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
    { mainColumn1: "First", mainColumn2: "second" },
    { mainColumn1: "thrd", mainColumn2: "fourth" },
    // Add more data as needed
  ];

  useEffect(() => {
    console.log(displayLaborCosts);
  }, [displayLaborCosts]);

  return (
    <>
      <div className="dashit">
        <div className="row">
          <div className="col-lg-12">
            <div id="dash" className="col-md-5">
              <div className="custom-card">
                <div className="custom-card-img">
                  <img src={ware} alt="Profile" />
                </div>
                <div className="custom-desc">
                  <h6 className="custom-primary-text">{name}</h6>
                  <h6 className="custom-secondary-text">
                  {desc}
                  </h6>
                </div>
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
                    <h6 className="custom-primary-text">${amtStaked.toLocaleString()}</h6>
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
                        
                        <tr
                          className="main-row"
                          onClick={() => toggleSubRows(index)}
                        >
                          <td id="tdata">{item.mainColumn1}</td>
                          <td id="tdata">
                            {item.mainColumn2}
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
                            <tr className="sub-row">
                              <td colSpan={2}>
                                <div className="sub-row-content">
                                  <div> Sub 1</div>
                                  <div> Sub 2</div>
                                </div>
                              </td>
                            </tr>
                            <tr className="sub-row">
                              <td colSpan={2}>
                                <div className="sub-row-content">
                                  <div> Sub 3</div>
                                  <div> Sub 4</div>
                                </div>
                              </td>
                            </tr>
                          </>
                        )}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
                <p id="totalcontent">
                  <span id="total">Total:</span>
                  <span id="totalprice">$3000</span>
                </p>

                {/* ...rest of the card content... */}
              </div>
              <div className="col-md-12 text-center">
                <button
                  id="submitbut"
                  type="button"
                  className="button button-a button-big button-rounded"
                >
                  Stake
                  <img src={stakeIcon} alt="Stake Icon" className="icon" />{" "}
                </button>
              </div>
            </div>

            <div id="dash" className="col-md-5">
              <div className="custom-card">
                <div className="custom-card-img">
                  <img src={ware} alt="Profile" />
                </div>
                <div className="custom-desc">
                  <h6 className="custom-primary-text">{name}</h6>
                  <h6 className="custom-secondary-text">
                  {desc}
                  </h6>
                </div>
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
                    <h6 className="custom-primary-text">${amtStaked.toLocaleString()}</h6>
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
                        
                        <tr
                          className="main-row"
                          onClick={() => toggleSubRows(index)}
                        >
                          <td id="tdata">{item.mainColumn1}</td>
                          <td id="tdata">
                            {item.mainColumn2}
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
                            <tr className="sub-row">
                              <td colSpan={2}>
                                <div className="sub-row-content">
                                  <div> Sub 1</div>
                                  <div> Sub 2</div>
                                </div>
                              </td>
                            </tr>
                            <tr className="sub-row">
                              <td colSpan={2}>
                                <div className="sub-row-content">
                                  <div> Sub 3</div>
                                  <div> Sub 4</div>
                                </div>
                              </td>
                            </tr>
                          </>
                        )}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
                <p id="totalcontent">
                  <span id="total">Total:</span>
                  <span id="totalprice">$3000</span>
                </p>

                {/* ...rest of the card content... */}
              </div>
              <div className="col-md-12 text-center">
                <button
                  id="submitbut"
                  type="button"
                  className="button button-a button-big button-rounded"
                >
                  Stake
                  <img src={stakeIcon} alt="Stake Icon" className="icon" />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
