import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <div className="footer-top-part">
          <div className="footer-brand">&copy; 2019. Markk Inc.</div>
          <ul className="footer-items">
            <li className="footer-item">Blog</li>
            <li className="footer-item">About</li>
            <li className="footer-item">Contact</li>
            <li className="footer-item">Careers</li>
            <li className="footer-item">Privacy</li>
            <li className="footer-item">Terms</li>
          </ul>
        </div>
        <div className="social-links">
          <img
            src={require("../../assets/img/twit.png")}
            alt="twitter"
            className="social-item"
          />
          <img
            src={require("../../assets/img/insta.png")}
            alt="Instagram"
            className="social-item"
          />
          <img
            src={require("../../assets/img/fb.png")}
            alt="Facebook"
            className="social-item"
          />
        </div>
      </div>
    );
  }
}

export default Footer;
