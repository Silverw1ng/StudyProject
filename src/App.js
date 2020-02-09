import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainBar from "./components/MainBar";
import HomePage from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Sights from "./components/Sights";
import AllTowns from './components/AllTowns';
import Uglich from './components/Towns/Uglich';
import Rostov from './components/Towns/Rostov';
import Myshkin from './components/Towns/Myshkin';
import Rybinsk from './components/Towns/Rybinsk';
import Tutaev from './components/Towns/Tutaev';
import Pereslavl from './components/Towns/Pereslavl';

export default function App() {
  return (
    <Router>
      <Switch>
        <div className="main-container">
          <MainBar/>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/sights">
              <Sights />
            </Route>
            <Route exact path="/towns">
              <AllTowns />
            </Route>
            <Route exact path="/towns/uglich">
              <Uglich />
            </Route>
            <Route exact path="/towns/myshkin">
              <Myshkin />
            </Route>
            <Route exact path="/towns/tutaev">
              <Tutaev />
            </Route>
            <Route exact path="/towns/rybinsk">
              <Rybinsk />
            </Route>
            <Route exact path="/towns/rostov">
              <Rostov />
            </Route>
            <Route exact path="/towns/pereslavl">
              <Pereslavl />
            </Route>
          <Footer/>
        </div>
      </Switch>
    </Router>
  );
}
