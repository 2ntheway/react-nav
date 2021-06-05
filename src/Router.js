import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import hot from "./components/hot/Hot";
import app from "./App";

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={app} />
      <Route exact path="/weibohot" component={hot} />
    </Switch>
  </HashRouter>
);

export default BasicRoute;
