import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Search from "./pages/Search";
import SearchResult from "./pages/SearchResult";
import ProductDetail from "./pages/ProductDetail";

export default function Routes() {
  return (
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route
            exact
            path="/items"
            render={props => <SearchResult {...props} />}
          />
          <Route
            exact
            path="/items/:id"
            render={props => <ProductDetail {...props} />}
          />
        </Switch>
      </App>
    </Router>
  );
}
