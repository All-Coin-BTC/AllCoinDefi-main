import React from 'react'
import { dummyOperations } from '../data/dummyData'
import OperationsCard from '../Components/OperationsCard';
const data = dummyOperations;
export default function Operations() {
  return (
    <div className="operations-page-container">
      <div className="operations-title text-gray-400 text-center">
        AllCoin Operations
      </div>

      {data.map((item) => (
        <div className="mt-4" key={item.id}>
          <OperationsCard
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
  )
}
