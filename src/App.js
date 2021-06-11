import React, { Component } from "react";
import Nav from "./nav";
import Hot from "./components/hot/Hot";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Nav} />
            <Route exact path="/weibohot" component={Hot} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
export default App;
