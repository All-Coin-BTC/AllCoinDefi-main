import React from "react";
import { PuffLoader } from "react-spinners";

export default function LoadScreen({ loading }) {
  return (
    <div className="loading-page-container">
      <div className="flex flex-col items-center justify-between h-full pt-52 pb-10 overflow-hidden">
        <div className="top-container flex justify-center items-center gap-2">
          <div className="ringLoader-container relative z-10">
            <PuffLoader
              className="z-50"
              color={"#2de1bd"}
              loading={loading}
              size={80}
              aria-label="Loading Spinner"
              data-testid="loader"
              cssOverride={{ opacity: 0.28 }}
            />
            <img
              src="Logo 8.png"
              className="allcoin-spinner-logo w-8 absolute left-1/2 top-1/2"
            />
          </div>

          <div className="loading-title text-4xl font-bold">ALLCOIN</div>
        </div>
        <div className="bottom-container text-black">
          Enabling Real World P2P
        </div>
      </div>
    </div>
  );
}
