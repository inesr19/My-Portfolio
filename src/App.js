import React from "react";
import Homepage from "./components/pages/Homepage";
import { HashRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <HashRouter basename='/'>
      <div>
        <ul>
          <li><Link to='/'>Ines Radic</Link></li>
        </ul>
        <hr />
        <Route exact path='/' component={Homepage} />
      </div>
    </HashRouter>
  );
  
}

export default App;
