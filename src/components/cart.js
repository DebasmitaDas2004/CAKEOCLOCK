import React from "react";
import "./cartStyle.css";

const CartPage = ({ cartItems, removeFromCart }) => {
  const deliveryCharge = 50;
  const totalPrice =
    cartItems.reduce((sum, item) => sum + item.Price, 0) + deliveryCharge;

  return (
    <div className="cartContainer">
      <div className="cartContent">
        {/* Cart Items Section */}
        <div className="cartItemsSection">
          <h2 className="cartTitle">YOUR CART ITEMS</h2>
          <div className="cartItems">
            {cartItems.length === 0 ? (
              <p className="disem">Your cart is empty</p>
            ) : (
              cartItems.map((item) => (
                <div className="cartItem" key={item.Id}>
                  <img src={item.Image} alt={item.Name} className="cartImage" />
                  <h6 className="cartName">{item.Name}</h6>
                  <p className="cartPrice">{item.Price}</p>
                  <button
                    className="removeFromCart"
                    onClick={() => removeFromCart(item.Id)}
                  >
                    REMOVE FROM CART
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Checkout Section */}
        <div className="checkoutSection">
          <h2 className="checkoutTitle">CART CHECKOUT DETAILS</h2>
          <div className="checkoutBox">
            <p>TOTAL ITEMS : {cartItems.length}</p>
            <p>PRICE : {cartItems.reduce((sum, item) => sum + item.Price, 0)}</p>
            <p>DELIVERY CHARGE : {deliveryCharge}</p>
            <p className="totalPrice">
              TOTAL PRICE : {cartItems.length === 0 ? 0 : totalPrice}
            </p>
            <button className="placeOrderButton">PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
