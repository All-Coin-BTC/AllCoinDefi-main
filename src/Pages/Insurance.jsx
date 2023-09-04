import React from "react";
import InsuranceCard from "../Components/InsuranceCard";
import { dummyInsurance } from "../data/dummyData";
const data = dummyInsurance;
export default function Insurance() {
  return (
    <div className="dashit">
      <div className="row">
        <div className="col-lg-12">
          <div className="d-flex justify-content-center">
            {data.map((item) => (
              <div className="mt-4" key={item.id}>
                <InsuranceCard
                  id={item.id}
                  img={item.img}
                  name={item.name}
                  desc={item.desc}
                  apr={item.apr}
                  amtStaked={item.amtStaked}
                  learnMoreInfo={item.learnMoreInfo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
