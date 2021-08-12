import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import useGoogleAddress from "../hooks/useGoogleAddress";
import "../source/style/components/Success.css";
import Map from "../components/Map";
import Seo from "../seo/Seo";
const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const location = useGoogleAddress(buyer[0].address);
  return (
    <>
      <Seo
        title="Success"
        description="description"
        twitter_card="summary_large_image"
        twitter_site="@TU_USER"
        twitter_creator="@TU_USER"
        twitter_title="Success"
        twitter_description="Success"
        twitter_image="s3.amazonaws.com/gndx.dev/gndxdev.png"
        og_title="Success"
        og_description="Success"
        og_image="s3.amazonaws.com/gndx.dev/gndxdev.png"
        og_url="shop.example.com"
        og_site_name="Success"
        og_locale="es_ES"
        og_type="article"
        fb_app_id="ID_APP_FACEBOOK"
      />
      <div className="Success">
        <div className="Success-content">
          <h2>{`${buyer.lastName}, thanks for your purchase`}</h2>
          <span>your order will arrive in 3 days</span>
          <div className="Success-map">
            <Map data={location} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
