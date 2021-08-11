import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../Pages/Home.jsx";
import Checkout from "../Pages/Checkout.jsx";
import Information from "../Pages/Information";
import Payment from "../Pages/Payment";
import Success from "../Pages/Success";
import NotFound from "../Pages/NotFound";

import { AppContextProvider } from "../context/AppContext";

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/checkout/information" component={Information} />
            <Route exact path="/checkout/payment" component={Payment} />
            <Route exact path="/checkout/success" component={Success} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
