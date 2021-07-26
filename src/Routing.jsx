import React from "react";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import Products from "./Components/Products";
import NewsShy from "./Components/NewsShy";

const Routing = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/Shycosafe" exact component={App} />
          <Route path="/products" exact component={NewsShy} />
        </Switch>
      </>
    </Router>
  );
};

export default Routing;
