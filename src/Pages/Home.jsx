import React from "react";
import Seo from "../seo/Seo";
import Products from "../components/Products";

const Home = () => {
  return (
    <>
      <Seo
        title="Shop"
        twitter_card="summary_large_image"
        twitter_site="@TU_USER"
        twitter_creator="@TU_USER"
        twitter_title="Shop"
        twitter_description="Shop - see all products"
        twitter_image="s3.amazonaws.com/gndx.dev/gndxdev.png"
        og_title="Shop"
        og_description="Shop - see all products"
        og_image="s3.amazonaws.com/gndx.dev/gndxdev.png"
        og_url="shop.example.com"
        og_site_name="Shop"
        og_locale="es_ES"
        og_type="article"
        fb_app_id="ID_APP_FACEBOOK"
      />
      <Products />
    </>
  );
};

export default Home;
