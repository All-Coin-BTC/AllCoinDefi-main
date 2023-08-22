import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductBakset from "./Pages/ProductBakset";
import Insurance from "./Pages/Insurance";
import Operations from "./Pages/Operations";
import MarketFixedAssets from "./Pages/MarketFixedAssets";
import MarketInsurancePools from "./Pages/MarketInsurancePools";
import MarketStableCoins from "./Pages/MarketStableCoin";
import MarketAllCoin from "./Pages/MarketAllCoin";
import Warehousing from "./Pages/Warehousing";
import Logistics from "./Pages/Logistics";
import Homepage from "./Pages/Homepage";
import WorkingCapitalPool from "./Pages/WorkingCapitalPool";
import LoadScreen from "./Components/LoadScreen";
import Navbar from "./Components/Navbar";
import Nowallet from "./Components/Nowallet";

import "./assets/css/font-awesome.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/select2.min.css";
import "./assets/css/style.css";
import "./assets/css/dashboard.css";
import "./assets/css/skins/orange.css";

import web3 from "./web3"; // Import the web3 instance

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  const [isWalletConnected, setIsWalletConnected] = useState<boolean>(false);
  const [walletAddress, setWalletAddress] = useState<string>("");

  useEffect(() => {
    const checkWalletConnection = async () => {
      if (web3.currentProvider) {
        try {
          // Request user permission to connect the wallet
          await (web3.currentProvider as any).request({
            method: "eth_requestAccounts",
          });

          // Check the connection status or Ethereum address availability in the web3 instance
          const accounts: string[] = await web3.eth.getAccounts();
          const isConnected: boolean = accounts.length > 0;

          setIsWalletConnected(isConnected);
          setWalletAddress(accounts[0]); // Set the wallet address
        } catch (error) {
          console.error("Failed to connect the wallet:", error);
        }
      }
    };

    checkWalletConnection();
  }, []);

  const connectWallet = () => {
    if (web3.currentProvider) {
      (web3.currentProvider as any)
        .request({ method: "eth_requestAccounts" })
        .then((accounts: string[]) => {
          setIsWalletConnected(true);
          setWalletAddress(accounts[0]);
        })
        .catch((error: Error) => {
          console.log(error);
        });
    } else {
      window.open("https://metamask.io/download.html", "_blank");
    }
  };

  const disconnectWallet = () => {
    setIsWalletConnected(false);
    setWalletAddress("");
  };

  return (
    <>
      {loading ? (
        <LoadScreen loading={loading} />
      ) : (
        <>
          <div className="wrapper">
            <Router>
              <Navbar
                isWalletConnected={isWalletConnected}
                walletAddress={walletAddress}
                connectWallet={connectWallet}
                disconnectWallet={disconnectWallet}
              />
              {isWalletConnected ? (
                <div
                  id="main-slide"
                  className="carousel slide carousel-fade"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    {/* Carousel Item Starts */}
                    <div className="item active bg-parallax item-1">
                      <div className="slider-content">
                        <div className="container">
                          <div className="col-lg-12">
                            <Routes>
                              <Route path="/" element={<Homepage />} />
                              <Route
                                path="/warehousing"
                                element={<Warehousing />}
                              />
                              <Route
                                path="/logistics"
                                element={<Logistics />}
                              />
                              <Route path="/logistics-pools" />
                              <Route path="/warehouse-pools" />
                              <Route
                                path="/working-capital-pools"
                                element={<WorkingCapitalPool />}
                              />
                              <Route
                                path="/insurance-pools"
                                element={<Insurance />}
                              />
                            </Routes>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Carousel Item Ends */}
                  </div>
                </div>
              ) : (
                <Nowallet connectWallet={connectWallet} />
              )}
            </Router>
          </div>
        </>
      )}
    </>
  );
};

export default App;
