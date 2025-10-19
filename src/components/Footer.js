// Footer.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css"; // keep styles separate

const Footer = () => {
  const navigate = useNavigate(); // ✅ initialize navigate

  return (
    <footer>
      <div className="footerContainer">
        {/* Categories */}
        <div className="footerColumn">
          <h3 className="footerCategory">CATEGORIES</h3>
          <a href="#">TRENDING</a>
          <a href="#">THEME-CAKES</a>
          <a href="#">
            DIY-CAKES <sup>NEW</sup>
          </a>
          <a href="#">SIGNATURE-CAKES</a>
          <a href="#">CUSTOM-CAKES</a>
          <a href="#">ON-OFFER-CAKES</a>
        </div>

        {/* Details */}
        <div className="footerColumn">
          <h3 className="footerCategory">DETAILS</h3>
          <a href="#">CONTACT US</a>
          <a href="#">ABOUT US</a>
          {/* ✅ Navigate to homepage */}
          <a
            // className="actionContainer"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >HOME</a>
          <a href="#">TERMS & CONDITIONS</a>
          <a href="#">TRACK ORDER</a>
          <a href="#">LOGIN</a>
        </div>

        {/* Connect with Us */}
        <div className="footerColumn">
          <h3 className="footerCategory">CONNECT WITH US</h3>
          <a href="#">WEBSITE</a>
          <a href="#">INSTAGRAM</a>
          <a href="#">FACEBOOK</a>
          <a href="#">EMAIL</a>
          <a href="#">WHATSAPP</a>
          <a href="#">LOCATION</a>
        </div>

        {/* Logo */}
        <div className="footerColumnLogo">
          <a href="#">
            <img className="logoFooter" src="images/myLogo.png" alt="LOGO" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
