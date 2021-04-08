import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route } from "react-router-dom";
import Homepage from "./components/pages/Home/Homepage";


function App() {
  return (
    <HashRouter basename='/'>
      <div>
        <Route exact path='/' component={Homepage} />
      </div>
    </HashRouter>
  );
  
}

export default App;
