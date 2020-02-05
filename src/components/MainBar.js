import React from "react";
import {Link} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function MainBar() {
    return(
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/">Главная</Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/sights">Достопримечательности</Nav.Link>
            <Nav.Link as={Link} to="/other">Города области</Nav.Link>
            <Nav.Link as={Link} to="/about">О сайте</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );

}
