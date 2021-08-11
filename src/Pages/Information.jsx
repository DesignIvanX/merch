import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import { FaBackward } from "react-icons/fa";

import "../source/style/components/Information.css";

const Information = (props) => {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const { cart } = state;
  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      address: formData.get("address"),
      apto: formData.get("apto"),
      city: formData.get("city"),
      country: formData.get("country"),
      state: formData.get("state"),
      postalCode: formData.get("postalCode"),
      phoneNumber: formData.get("phoneNumber"),
    };
    addToBuyer(buyer);
    props.history.push("/checkout/payment");
  };
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Information of contact</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Last Name" name="lastName" />
            <input type="text" placeholder="Email" name="email" />
            <input type="text" placeholder="Address" name="address" />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="City" name="city" />
            <input type="text" placeholder="Country" name="country" />
            <input type="text" placeholder="State" name="state" />
            <input type="text" placeholder="Postal code" name="postalCode" />
            <input type="text" placeholder="Phone Number" name="phoneNumber" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout/">
              <FaBackward title="Back" />
            </Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>
              Pay
            </button>
          </div>
        </div>
      </div>
      <div className="Informatin-sidebar">
        <h3>Orders:</h3>
        {cart.map((item) => {
          return (
            <div className="Information-item" key={item.cartId}>
              <div className="Information-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Information;
