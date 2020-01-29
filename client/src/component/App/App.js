import React from 'react';
import './App.css';
import Login from "../Login/Login"
import  "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Switch, Route } from "react-router-dom"

function App() {
  return (
    <div>
        <main>
            <BrowserRouter>
                <Switch>
                   <Route exact path="/" component={Login} />
                </Switch>
            </BrowserRouter>
        </main>
    </div>
  );
}

export default App;
