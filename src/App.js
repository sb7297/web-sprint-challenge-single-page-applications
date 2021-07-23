import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import PizzaOrder from "./PizzaOrder";

const App = () => {
  return (
    <Switch>
      <Route path="/pizza" component={PizzaOrder} />
      <Route path="/" component={Home} />
    </Switch>
  );
};
export default App;
