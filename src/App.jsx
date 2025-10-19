// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/main";
import Footer from "./components/Footer";
import Cart from "./components/cart";
import Favourites from "./components/favourites";

const App = () => {
  // Cart state
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItemsStore")) || []
  );

  // Favourites state
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("favouritesStore")) || []
  );

  // Keep cart in localStorage
  useEffect(() => {
    localStorage.setItem("cartItemsStore", JSON.stringify(cartItems));
  }, [cartItems]);

  // Keep favourites in localStorage
  useEffect(() => {
    localStorage.setItem("favouritesStore", JSON.stringify(favourites));
  }, [favourites]);

  // Cart functions
  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.Id !== id));
  };

  // ✅ Toggle favourites
  const toggleFavourite = (item) => {
    setFavourites((prev) => {
      const exists = prev.find((fav) => fav.Id === item.Id);
      if (exists) {
        return prev.filter((fav) => fav.Id !== item.Id); // remove
      } else {
        return [...prev, item]; // add
      }
    });
  };

  return (
    <Router>
      <Header cartCount={cartItems.length} favCount={favourites.length} />

      <Routes>
        {/* Homepage with products */}
        <Route
          path="/"
          element={
            <Main
              addToCart={addToCart}
              favourites={favourites}
              toggleFavourite={toggleFavourite}
            />
          }
        />

        {/* Cart page */}
        <Route
          path="/cart"
          element={
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          }
        />

        {/* Favourites page */}
        <Route
          path="/favourites"
          element={
            <Favourites
              favourites={favourites}
              removeFromFavourites={(id) =>
                setFavourites((prev) =>
                  prev.filter((fav) => fav.Id !== id)
                )
              }
              addToCart={addToCart}   // ✅ now passed
            />
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
