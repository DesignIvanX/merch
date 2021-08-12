import React from "react";
import { Helmet } from "react-helmet";

const Seo = ({
  title,
  description,
  twitter_card,
  twitter_site,
  twitter_creator,
  twitter_title,
  twitter_description,
  twitter_image,
  og_title,
  og_description,
  og_image,
  og_url,
  og_site_name,
  og_locale,
  og_type,
  fb_app_id,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* Twitter */}
      <meta name="twitter:card" content={twitter_card} />
      <meta name="twitter:site" content={twitter_site} />
      <meta name="twitter:creator" content={twitter_creator} />
      <meta name="twitter:title" content={twitter_title} />
      <meta name="twitter:description" content={twitter_description} />
      <meta name="twitter:image" content={twitter_image} />
      {/* Web */}
      <meta property="og:title" content={og_title} />
      <meta property="og:description" content={og_description} />
      <meta property="og:image" content={og_image} />
      <meta property="og:url" content={og_url} />
      <meta property="og:site_name" content={og_site_name} />
      <meta property="og:locale" content={og_locale} />
      <meta property="og:type" content={og_type} />
      {/* Faccebook */}
      <meta property="fb:app_id" content={fb_app_id} />
    </Helmet>
  );
};

export default Seo;
