import React from "react";
import Seo from "../seo/Seo";
const NotFound = () => {
  return (
    <div>
      <Seo
        title="NotFound"
        description="description"
        twitter_card="summary_large_image"
        twitter_site="@TU_USER"
        twitter_creator="@TU_USER"
        twitter_title="NotFound"
        twitter_description="NotFound"
        twitter_image="s3.amazonaws.com/gndx.dev/gndxdev.png"
        og_title="Shop"
        og_description="NotFound"
        og_image="s3.amazonaws.com/gndx.dev/gndxdev.png"
        og_url="shop.example.com"
        og_site_name="NotFound"
        og_locale="es_ES"
        og_type="article"
        fb_app_id="ID_APP_FACEBOOK"
      />
      <h1>NotFound</h1>
    </div>
  );
};

export default NotFound;
