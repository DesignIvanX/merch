import React from "react";

import Header from "./Header";
import Footer from "./Footer";

import "../source/style/components/Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="Main">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
