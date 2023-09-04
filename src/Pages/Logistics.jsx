import React from "react";

import { dummyLogistics } from "../data/dummyData";

import LogisticsCard from "../Components/LogisticsCard";
const data = dummyLogistics;
export default function Logistics() {
  return (
    <div className="assets-page-container">
      <div className="dashit">
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex justify-content-center">
              {data.map((item) => (
                <div className="mt-4" key={item.id}>
                  <LogisticsCard
                    id={item.id}
                    img={item.img}
                    name={item.name}
                    desc={item.desc}
                    apr={item.apr}
                    amtStaked={item.amtStaked}
                    revenue={item.revenue}
                    driverLabor={item.driverLabor}
                    maintenanceLabor={item.maintenanceLabor}
                    gasolineCost={item.gasolineCost}
                    insuranceCost={item.insuranceCost}
                    learnMoreInfo={item.learnMoreInfo}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
