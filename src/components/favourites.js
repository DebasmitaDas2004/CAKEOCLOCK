
// src/components/Favourites.js 
import React from "react";
import "./favorites.css";

const Favourites = ({ favourites, removeFromFavourites, addToCart }) => {
  const moveToCart = (item) => {
    addToCart(item);                 // Add to cart
    removeFromFavourites(item.Id);   // Remove from favourites
  };

  return (
    <div className="favouritesPage">
      <h2 className="Favtitle">My Favourites</h2>
      {favourites.length === 0 ? (
        <p className="empty">No items in favourites.</p>
      ) : (
        <ul>
          {favourites.map((item) => (
            <li key={item.Id}>
              <img src={item.Image} alt={item.Name} width="80" />
              <span>{item.Name} - ₹{item.Price}</span>
              <button onClick={() => moveToCart(item)}>
                Move to Cart
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favourites;
