import React from "react";

import "./Footer.css";

const Footer = () => (
  <>
    <div className="footer-block"></div>
    <div className="footer">
      <div className="footer-container">
        <p>
          Like to have a say? Make a suggestion{" "}
          <a
            className="profile"
            href="https://docs.google.com/forms/d/e/1FAIpQLSftRxcR7W-iSxgk5Yrr9vvJ__Na2L-cu6sm4qNk2_vZNO7r7A/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
        <p>
          Check out  {" "}
          <a
            className="profile"
            href="https://poolofyouth.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pool of youth
            <i className="fas fa-heartbeat" />
          </a>
        
        </p>
      </div>
    </div>
  </>
);

export default Footer;
