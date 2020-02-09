import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";

export default function MainBar() {
    return(
      <div>
        <Navbar bg="dark" variant="dark" expand="md">
          <Navbar.Brand as={Link} to="/">Главная</Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/sights">Достопримечательности</Nav.Link>
            <NavDropdown title="Города области" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/towns/uglich">Углич</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/towns/myshkin">Мышкин</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/towns/rybinsk">Рыбинск</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/towns/tutaev">Тутаев</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/towns/pereslavl">Переславль-Залесский</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/towns/rostov">Ростов Великий</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/towns">Все города</NavDropdown.Item>
            </NavDropdown>         
            <Nav.Link as={Link} to="/about">О сайте</Nav.Link>          
          </Nav>
        </Navbar>
      </div>
    );

}
