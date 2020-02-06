import React from "react";
import {Link} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";

export default function MainBar() {
    return(
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/">Главная</Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/sights">Достопримечательности</Nav.Link>
            <NavDropdown title="Города области" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/Uglich">Углич</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Myshkin">Мышкин</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Rybinsk">Рыбинск</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Tutaev">Тутаев</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Pereslavl">Переславль</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Rostov">Ростов Великий</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/all">Все города</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/about">О сайте</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );

}
