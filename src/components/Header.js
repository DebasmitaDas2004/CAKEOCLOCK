



// src/components/Header.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header({ cartCount, favCount }) {
  const navigate = useNavigate(); // ✅ use navigate hook

  return (
    <header className="header">
      {/* Logo */}
      <div className="logoContainer" onClick={() => navigate("/")}>
        <img className="logo" src="/images/myLogo.png" alt="LOGO" />
      </div>

      {/* Navigation */}
      <div className="navBar">
        <a href="#">TRENDING</a>
        <a href="#">THEME-CAKES</a>
        <a href="#">
          DIY-CAKES <sup>NEW</sup>
        </a>
        <a href="#">SIGNATURE-CAKES</a>
        <a href="#">CUSTOM-CAKES</a>
        <a href="#">ON-OFFER-CAKES</a>
      </div>

      {/* Search Bar */}
      <div className="searchBar">
        <span className="material-symbols-outlined searchIcon">search</span>
        <input
          type="text"
          className="searchInput"
          placeholder=" Search Cakes"
        />
      </div>

      {/* Action Bar */}
      <div className="actionBar">
        {/* Grouped: Favourite + Cart */}
        <div className="actionGroup">
          {/* Favourite */}
          <div
            className="actionContainer"
            onClick={() => navigate("/favourites")}
            style={{ cursor: "pointer" }}
          >
            <span className="material-symbols-outlined favouriteIcon">
              favorite
            </span>
          </div>

          {/* Cart */}
          <div
            className="actionContainer"
            onClick={() => navigate("/cart")}
            style={{ cursor: "pointer" }}
          >
            <span className="material-symbols-outlined cartIcon">
              shopping_bag
            </span>
            {cartCount > 0 && (
              <span className="cartItemCounter">{cartCount}</span>
            )}
          </div>
        </div>

        {/* Login */}
        <div className="actionContainer">
          <button className="loginButton">LOGIN</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
