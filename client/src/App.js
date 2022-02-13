import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Graphic from "./pages/Graphic";
import Portfolio from "./pages/Portfolio";
import Screenshot from "./pages/ScreenShot";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/graphic-design">
            <Graphic />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/screenshot">
            <Screenshot />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      
    </Router>
  );
}

export default App;
