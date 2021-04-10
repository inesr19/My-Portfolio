import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Switch, Route } from "react-router-dom";
import Homepage from "./components/pages/Home/Homepage";
import ContactPage from "./components/pages/Contact/ContactPage"
import PortfolioPage from "./components/pages/Portfolio/PortfolioPage";


function App() {
  return (
    <HashRouter>
    <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/portfolio" component={PortfolioPage} />
    </Switch>
    </HashRouter>
  );
  
}

export default App;
