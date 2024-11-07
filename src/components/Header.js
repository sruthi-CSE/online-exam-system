import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>Online Exam System</Navbar.Brand>
        <Button variant="outline-light">Logout</Button>
      </Container>
    </Navbar>
  );
};

export default Header;
