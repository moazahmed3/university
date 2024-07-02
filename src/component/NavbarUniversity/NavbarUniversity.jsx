import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LuBackpack } from "react-icons/lu";
import './NavbarUniversity.css'
import { NavLink } from "react-router-dom";
function NavbarUniversity() {
  return (
    <div className="navbar container">
      <Navbar expand="lg" className="w-100">
        <Container >
          <Navbar.Brand href="/" className="d-flex align-items-center gap-2">
            <LuBackpack fill="#dc3545" height="48" width="48" className="fs-1" />
            <span className="t text-white text-uppercase fw-bold">react <br />University <br />London</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/university">our courses</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/blog">blog</NavLink>
              <NavLink to="/contact">get in touch</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarUniversity;
