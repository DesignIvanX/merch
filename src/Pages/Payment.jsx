import React, { useContext } from "react";
import { PayPalButton } from "react-paypal-button";

import AppContext from "../context/AppContext";
import Seo from "../seo/Seo";
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
    <>
      <Seo
        title="Payment"
        description="description"
        twitter_card="summary_large_image"
        twitter_site="@TU_USER"
        twitter_creator="@TU_USER"
        twitter_title="Payment"
        twitter_description="Payment "
        twitter_image="s3.amazonaws.com/gndx.dev/gndxdev.png"
        og_title="Payment"
        og_description="Payment"
        og_image="s3.amazonaws.com/gndx.dev/gndxdev.png"
        og_url="shop.example.com"
        og_site_name="Payment"
        og_locale="es_ES"
        og_type="article"
        fb_app_id="ID_APP_FACEBOOK"
      />
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
    </>
  );
};

export default Payment;
