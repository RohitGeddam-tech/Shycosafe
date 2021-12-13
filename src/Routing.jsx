import React from "react";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Products from "./Components/Products";
// import NewsShy from "./Components/NewsShy";
// import FAQ from "./Components/FAQ";
// import BookBack from "./Backend/BookBack";
// import AboutPage from "./Components/About/AboutPage";
import Shycocan from "./Shyocan";
// import User from "./Backend/User";
import Login from "./layout/Login";
import loadable from "@loadable/component";
const BookBack = loadable(() => import("./Backend/BookBack"));
// const Shycocan = loadable(() => import("./Shycocan"));
const User = loadable(() => import("./Backend/User"));
const NewsShy = loadable(() => import("./Components/NewsShy"));
const FAQ = loadable(() => import("./Components/FAQ"));
const AboutPage = loadable(() => import("./Components/About/AboutPage"));

const Routing = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/Shycosafe" exact component={App} />
          <Route path="/news" exact component={NewsShy} />
          <Route path="/faq" exact component={FAQ} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/leads" exact component={BookBack} />
          <Route path="/user" exact component={User} />
          <Route path="/Shycocan" exact component={Shycocan} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </>
    </Router>
  );
};

export default Routing;
