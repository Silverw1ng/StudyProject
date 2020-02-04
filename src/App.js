import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainBar from "./components/MainBar";
import HomePage from "./components/Home";
import Footer from "./components/About";

export default function App() {
  return (
    <Router>
      <div className="main-container">
        <MainBar/>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route path="/about">
          </Route>
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}
