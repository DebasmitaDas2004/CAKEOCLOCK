


// Main.js
import React from "react";
import "./main.css"; 
import { useNavigate } from "react-router-dom";
import dataItems from "./data";

const Main = ({ addToCart, favourites, toggleFavourite }) => {
  const navigate = useNavigate();

  // Separate trending and signature items
  const trendingItems = dataItems.slice(0, 6);
  const signatureItems = dataItems.slice(6);

  return (
    <main>
      <div>
        {/* Banner Section */}
        <div className="bannerContainer">
          <img
            className="bannerImage"
            src="images/myBanner.jpg"
            alt="Main Banner"
          />
        </div>

        {/* Trending Section */}
        <div>
        <div className="trendingHeading">TRENDINGS</div>
        <div className="trendingItems">
          {trendingItems.map((item) => (
            <div className="item" key={item.Id}>
              {/* Favourite Icon (top-right) */}
              <button
                className={`favourites ${
                  favourites.find((fav) => fav.Id === item.Id) ? "active" : ""
                }`}
                onClick={() => toggleFavourite(item)}
              >
                &hearts;
              </button>

              <img className="itemImage" src={item.Image} alt={item.Name} />
              <h5 className="itemName">{item.Name}</h5>
              <h5 className="itemPrice">₹{item.Price}</h5>
              <button
                className="itemButton"
                onClick={() => addToCart(item)}
              >
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
        </div>

        {/* Signature Section */}
        <div className="signatureHeading">
          CAKE O&apos;CLOCK SIGNATURE ITEMS
        </div>
        <div className="signatureItems">
          {signatureItems.map((item) => (
            <div className="item" key={item.Id}>
              {/* Favourite Icon (top-right) */}
              <button
                className={`favourites ${
                  favourites.find((fav) => fav.Id === item.Id) ? "active" : ""
                }`}
                onClick={() => toggleFavourite(item)}
              >
                &hearts;
              </button>

              <img className="itemImage" src={item.Image} alt={item.Name} />
              <h5 className="itemName">{item.Name}</h5>
              <h5 className="itemPrice">₹{item.Price}</h5>
              <button
                className="itemButton"
                onClick={() => addToCart(item)}
              >
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
