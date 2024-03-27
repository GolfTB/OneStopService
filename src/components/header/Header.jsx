import React from 'react';
import "./header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">LOGO TUYEE</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#Learning">Learning</Nav.Link>
          <Nav.Link href="#Consulting">Consulting</Nav.Link>
          <Nav.Link href="#Convinient">Convinient</Nav.Link>
          <Nav.Link herf ="#Accommodation">Accommodation</Nav.Link>
          <Nav.Link href = "#Community">Community</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header