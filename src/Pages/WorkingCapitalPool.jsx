import React from "react";
import { PieChart, Pie } from "recharts";
import { dummyWorkingCapital, dummyPieChartData } from "../data/dummyData";

import WorkingCapitalCard from "../Components/WorkingCapitalCard";
const data = dummyWorkingCapital;
const chartData = dummyPieChartData;
export default function WorkingCapitalPool() {
  return (
    <div className="assets-page-container">
      <div className="dashit">
        <div id="chats">
          <div className="amt-staked text-center text-gray-200 my-4">
            Total Amount Staked: $10,000,000
          </div>
          <div className="pie-chart-container flex justify-center items-center">
            <PieChart width={375} height={200}>
              <Pie
                data={chartData}
                dataKey="dollars"
                outerRadius={76}
                label={(entry) => entry.name}
              />
            </PieChart>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex justify-content-center">
              {data.map((item) => (
                <div className="mt-4" key={item.id}>
                  <WorkingCapitalCard
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
                    logisticsInsuranceCost={item.logisticsInsuranceCost}
                    learnMoreInfo={item.learnMoreInfo}
                    janitorLabor={item.janitorLabor}
                    mechanicLabor={item.mechanicLabor}
                    vanOneCost={item.vanOneCost}
                    vanTwoCost={item.vanTwoCost}
                    leaseCost={item.leaseCost}
                    warehouseInsuranceCost={item.warehouseInsuranceCost}
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
