import React from 'react'

export default function OperationsCard({
    id,
    img,
    name,
    desc,
    apr,
    amtStaked,
    learnMoreInfo,
  }) {
  return (
  
      <div
      key={id}
      className="stake-card-container p-8 mx-4 flex flex-col justify-center items-center rounded-xl my-8"
    >
      <div className="operations-img">
        <img src={img} className="w-12" />
      </div>
      <div className="operations-name text-white text-4xl text-center">{name}</div>
      <div className="operations-description text-gray-400 text-center text-sm mt-4">
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
      <div className="stake-btn">
        <button className="text-white mt-8 px-8 py-4 bg-green-400 rounded-xl">
          Stake
        </button>
      </div>
      <div className="learn-more-btn text-gray-400 text-sm mt-4">
        <u>Learn More</u>
      </div>
    </div>
   
  )
}
