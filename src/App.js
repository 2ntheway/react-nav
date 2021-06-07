import React, { Component } from "react";
import Nav from "./nav";
import Hot from "./components/hot/Hot";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Nav} />
          <Route exact path="/weibohot" component={Hot} />
        </Switch>
      </Router>
    );
  }
}
export default App;
