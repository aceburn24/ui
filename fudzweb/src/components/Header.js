import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { BsSearch, BsPersonFill, BsPerson } from 'react-icons/bs';
import logo from './logo.png'; // Import your logo image

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="#home" className="font-weight-bold text-uppercase">
          welcome to<img src={logo} alt="FUDZ Logo" width="100" height="40" className="d-inline-block align-top" />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline className="ml-auto">
            <FormControl
              type="text"
              placeholder="What are you craving?"
              className="mr-sm-2"
              style={{ width: '300px', display: 'inline-block' }}
            />
            <Button variant="outline-success" style={{ display: 'inline-block', verticalAlign: 'top' }}>
              <BsSearch />
            </Button>
          </Form>
          <Nav className="ml-3" style={{ paddingLeft: '20px' }}>
            <Nav.Link href="#login">
              <BsPersonFill/> Login
            </Nav.Link>
            <Nav.Link href="#cart">
              <BsPerson /> Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
