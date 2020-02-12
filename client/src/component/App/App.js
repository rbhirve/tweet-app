import React from "react";
import "./App.css";
import Login from "../Login/Login";
import Register from "../Register/Register";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <main>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
