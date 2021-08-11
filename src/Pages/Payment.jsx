import React, { useContext } from "react";
import { PayPalButton } from "react-paypal-button";

import AppContext from "../context/AppContext";

import "../source/style/components/Payment.css";

const Payment = (props) => {
  const { state, sumTotal, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const paypalOptions = {
    clientId:
      "ASzOhz0WUtg-Fn_5e6PV-RLPl03W897vL15ir6YyoHt9tWlAhwzCLiq7EaGnTyelxTFF3ot62XF7Yn45",
    intent: "capture",
    currency: "USD",
  };
  const buttonStyles = {
    layout: "vertical",
    shape: "rect",
  };
  const handleSumTotal = () => {
    return sumTotal(cart);
  };
  const handlePaymentSuccess = (data) => {
    if (data.status === "COMPLETED") {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      props.history.push("/checkout/success");
    }
  };
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Order summary</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.cartId}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log("Start Payment")}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
