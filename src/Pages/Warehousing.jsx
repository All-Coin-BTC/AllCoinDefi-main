import React from "react";

import { dummyWarehouse } from "../data/dummyData";
import WarehousingCard from "../Components/WarehousingCard";
const data = dummyWarehouse;
export default function Warehousing() {
  return (
    <div className="">
      <div className="dashit">
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex justify-content-center">
              {data.map((item) => (
                <div className="" key={item.id}>
                  <WarehousingCard
                    id={item.id}
                    img={item.img}
                    name={item.name}
                    desc={item.desc}
                    apr={item.apr}
                    amtStaked={item.amtStaked}
                    revenue={item.revenue}
                    janitorLabor={item.janitorLabor}
                    mechanicLabor={item.mechanicLabor}
                    vanOneCost={item.vanOneCost}
                    vanTwoCost={item.vanTwoCost}
                    leaseCost={item.leaseCost}
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
