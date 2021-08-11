import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import useGoogleAddress from "../hooks/useGoogleAddress";
import "../source/style/components/Success.css";
import Map from "../components/Map";
const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const location = useGoogleAddress(buyer[0].address);
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer.lastName}, thanks for your purchase`}</h2>
        <span>your order will arrive in 3 days</span>
        <div className="Success-map">
          <Map data={location} />
        </div>
      </div>
    </div>
  );
};

export default Success;
