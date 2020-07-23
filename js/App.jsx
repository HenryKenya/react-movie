// @flow
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import type { Match } from "react-dom";
import Landing from "./Landing";
import Search from "./Search";
import NotFound from "./NotFound";
import Details from "./Details";
import preload from "../data.json";

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route
          path="/search"
          component={(props) => <Search shows={preload.shows} {...props} />}
        />
        <Route
          path="/details/:id"
          component={(props: { match: Match }) => (
            <Details
              show={preload.shows.find(
                (show) => props.match.params.id === show.imdbID
              )}
              {...props}
            />
          )}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
