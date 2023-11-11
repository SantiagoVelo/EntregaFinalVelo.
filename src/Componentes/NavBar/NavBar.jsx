import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./styles.css";

function NavBarApp() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            className="imglogo"
            src="../images/logosolo.jpg"
            alt="logo makers m 3d"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="linkbtn" to="/">
              Home |
            </Link>
            <Link className="linkbtn" to="/category/phones">
              Celulares
            </Link>
            <Link className="linkbtn" to="/category/accessories">
              Accesorios
            </Link>
            {/* Agrega más categorías según sea necesario */}
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarApp;
