import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import { FaTrashAlt } from "react-icons/fa";

import "../source/style/components/Checkout.css";
const Checkout = () => {
  const { state, deleteFromCart, sumTotal } = useContext(AppContext);
  const { cart } = state;
  const handleRemove = (product) => () => {
    deleteFromCart(product);
  };
  const handleSumTotal = () => {
    return sumTotal(cart);
  };
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length ? <h3>Orders List:</h3> : <h3>No Orders...</h3>}
        {cart.map((item) => {
          return (
            <div key={item.cartId} className="Checkout-item">
              <div className="Checkout-element">
                <h4>{item.title}</h4>
                <span>{item.price}</span>
              </div>
              <button type="button" onClick={handleRemove(item)}>
                <FaTrashAlt title="Trash" />
              </button>
            </div>
          );
        })}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Price total: $ ${handleSumTotal()}`}</h3>
          <button type="button">
            <Link to="/checkout/information">Continue</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
