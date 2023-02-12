import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import { GiShoppingCart } from 'react-icons/gi'
import { SiFoodpanda } from 'react-icons/si'
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <>
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/"><SiFoodpanda size="1.5em" color='black'/></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">

          <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
          <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
          <LinkContainer to="/signup"><Nav.Link>Signup</Nav.Link></LinkContainer>
          <LinkContainer to="/login"><Nav.Link>Login</Nav.Link></LinkContainer>
          <LinkContainer to="/cart"><Nav.Link><GiShoppingCart size='1.5em'/></Nav.Link></LinkContainer>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default NavigationBar