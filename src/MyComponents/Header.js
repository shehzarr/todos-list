import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export const Header = (props) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="home">{props.title}</Navbar.Brand>
        <Nav className="float-end">
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link href="about">About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
