import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainBar from "./components/MainBar";
import HomePage from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Sights from "./components/Sights";
import AllTowns from './components/AllTowns';

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
            <About />
          </Route>
          <Route path="/sights">
            <Sights />
          </Route>
          <Route path="/all">
            <AllTowns />
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}
