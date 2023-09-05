import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram, faSkype, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <h3><span>Allcoin</span></h3>
                <p>
                  A108 Adam Street <br />
                  NY 535022, USA<br /><br />
                  <strong>Phone:</strong> +1 5589 55488 55<br />
                  <strong>Email:</strong> info@example.com<br />
                </p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                  <a href="#" className="facebook"><FontAwesomeIcon icon={faFacebook} /></a>
                  <a href="#" className="instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                  <a href="#" className="google-plus"><FontAwesomeIcon icon={faSkype} /></a>
                  <a href="#" className="linkedin"><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><FontAwesomeIcon icon={faChevronRight} /> <a href="#">Home</a></li>
                <li><FontAwesomeIcon icon={faChevronRight} /> <a href="#">About us</a></li>
                <li><FontAwesomeIcon icon={faChevronRight} /> <a href="#">Services</a></li>
                <li><FontAwesomeIcon icon={faChevronRight} /> <a href="#">Terms of service</a></li>
                <li><FontAwesomeIcon icon={faChevronRight} /> <a href="#">Privacy policy</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Liquidity Pools</h4>
              <ul>
                <li><FontAwesomeIcon icon={faChevronRight} /> <a href="#">Logistics Pools</a></li>
                <li><FontAwesomeIcon icon={faChevronRight} /> <a href="#"> Warehouse Pools</a></li>
                <li><FontAwesomeIcon icon={faChevronRight} /> <a href="#"> Working CAPITAL Pools</a></li>
                <li><FontAwesomeIcon icon={faChevronRight} /> <a href="#"> Insurance Pools</a></li>
                <li><FontAwesomeIcon icon={faChevronRight} /> <a href="#">Doc</a></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Get Updates</h4>
              <p style={{ color: 'white' }}>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
              <form action="" method="post">
                <input type="email" name="email" /><input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
