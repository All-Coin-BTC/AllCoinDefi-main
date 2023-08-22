import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/Logo-main.png";
import web3 from "../web3"; // Import the web3 instance
import "../assets/css/dashboard.css";

const Navbar = ({
  isWalletConnected,
  walletAddress,
  connectWallet,
  disconnectWallet,
}) => {
  const truncatedAddress = isWalletConnected
    ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
    : "";

  return (
    <header className="header fixed-top">
      <div className="container">
        <div className="row">
          {/* Logo Starts */}
          <div className="main-logo col-xs-12 col-md-3 col-md-2 col-lg-2 hidden-xs">
            <Link to="/">
              <p id="stable">
                <img
                  id="logo"
                  className="img-responsive"
                  src={logo}
                  alt="logo"
                />
                <b style={{ color: "#2de1bd" }}>
                ALLCOIN
                </b>
              </p>
            </Link>
          </div>
          {/* Logo Ends */}
          {/* Wallet Stats Starts */}
          
            <div className="col-md-7 col-lg-7">
              <ul className="unstyled bitcoin-stats text-center">
                {isWalletConnected ? (
                  <>
                    <li>
                      <FontAwesomeIcon
                        icon={faWallet}
                        className="wallet-icon"
                      />
                    </li>
                    <li>
                      <h6 style={{ color: "#2de1bd" }}>5.00</h6>
                      <span>
                        <b>
                          <h5 style={{ color: "#2de1bd" }}>BTC</h5>
                        </b>
                      </span>
                    </li>
                    
                    
                    <li>
                      <h6 style={{ color: "#2de1bd" }}>30.00</h6>
                      <span>
                        <b>
                          <h5 style={{ color: "#2de1bd" }}>USD</h5>
                        </b>
                      </span>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <FontAwesomeIcon
                        icon={faWallet}
                        className="wallet-icon"
                      />
                    </li>
                    <li>
                      <h6 style={{ color: "#2de1bd" }}>0.00</h6>
                      <span>
                        <b>
                          <h5 style={{ color: "#2de1bd" }}>BTC</h5>
                        </b>
                      </span>
                    </li>
                    <li>
                      <h6 style={{ color: "#2de1bd" }}>0.00</h6>
                      <span>
                        <b>
                          <h5 style={{ color: "#2de1bd" }}>USD</h5>
                        </b>
                      </span>
                    </li>
                    
                  </>
                )}
              </ul>
            </div>
          
          {/* Wallet Stats Ends */}
          {/* Wallet Actions Starts */}
          <div className="col-md-3 col-lg-3">
            <ul className="unstyled user">
              {isWalletConnected ? (
                <>
                  <li className="wallet-address">
                    <FontAwesomeIcon icon={faUser} className="profile-icon" />
                    <span>{truncatedAddress}</span>
                  </li>
                  <li className="disconnect-wallet">
                    <button
                      className="connect-btn"
                      onClick={disconnectWallet}
                    >
                      Disconnect
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="connect-wallet">
                    <button
                  
                      className="connect-btn"
                      onClick={connectWallet}
                    >
                      <i className="fa fa-plug"></i> Connect Wallet
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
          {/* Wallet Actions Ends */}
        </div>
      </div>
      {/* Navigation Menu Starts */}

      <nav className="site-navigation navigation" id="site-navigation">
        <div className="container">
          <div className="site-nav-inner">
            {/* Logo For ONLY Mobile display Starts */}
            <a className="logo-mobile" href="index-2.html">
              <img
                id="logo-mobile"
                className="img-responsive"
                src="images/logo-dark.png"
                alt=""
              />
            </a>
            {/* Logo For ONLY Mobile display Ends */}
            {/* Toggle Icon for Mobile Starts */}
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            {/* Toggle Icon for Mobile Ends */}
            <div className="collapse navbar-collapse navbar-responsive-collapse">
              {/* Main Menu Starts */}
              <ul className="nav navbar-nav">
                <li className="active">
                <Link to="/">Warehousing</Link>
                </li>

                <li>
                <Link to="/logistics">Logistics</Link>
                </li>
                
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Liquidity Pools <i className="fa fa-angle-down"></i>
                  </a>
                  <ul className="dropdown-menu" role="menu">
                    <li>
                      <a>Logistics Pools </a>
                    </li>
                    <li>
                      <a> Warehouse Pools</a>
                    </li>
                    <li>
                      <a> Working Capital Pools</a>
                    </li>
                    <li>
                      <a>Insurance Pools</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Docs <i className="fa fa-angle-down"></i>
                  </a>
                  <ul className="dropdown-menu" role="menu">
                    <li>
                      <a>Roadmap</a>
                    </li>
                    <li>
                      <a>Whitepaper</a>
                    </li>
                    <li>
                      <a>Medium</a>
                    </li>
                    
                    
                  </ul>
                </li>
                <li>
                  <a>Contact</a>
                </li>
                {/* Cart Icon Starts */}
                {/* <li className="cart">
                  <a>
                    <i className="fa fa-shopping-cart"></i>
                  </a>
                </li> */}
                {/* Cart Icon Starts */}
                {/* Search Icon Starts */}
                <li className="search">
                  <button className="fa fa-search"></button>
                </li>
                {/* Search Icon Ends */}
              </ul>
              {/* Main Menu Ends */}
            </div>
          </div>
        </div>
        {/* Search Input Starts */}
        <div className="site-search">
          <div className="container">
            <input
              type="text"
              placeholder="type your keyword and hit enter ..."
            />
            <span className="close">×</span>
          </div>
        </div>
        {/* Search Input Ends */}
      </nav>

      {/* Navigation Menu Ends */}
    </header>
  );
};

export default Navbar;
