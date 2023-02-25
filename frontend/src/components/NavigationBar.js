import React, { useContext } from 'react'
import { Navbar, Container, Nav, Badge, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { GiShoppingCart } from 'react-icons/gi'
import { BsBook } from 'react-icons/bs'
import { GoThreeBars } from 'react-icons/go'
import { Link, useNavigate } from 'react-router-dom';
import { Store } from '../Store';

const NavigationBar = () => {
  const { state, dispatch } = useContext(Store)
  const { cart, userInfo } = state
  const navigate = useNavigate()
  const handleLogout = ()=>{
    dispatch({type:'USER_LOGOUT'})
    localStorage.removeItem('userInfo')
    localStorage.removeItem('shippingAddress')
    navigate('/login')
  }
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/"><BsBook className='brand' size="1.5em" color='#3b71ca' /></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"> <GoThreeBars className='toggle-icon' size="1.5em"/> </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
              <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
              {userInfo
              ?(<NavDropdown title={userInfo.name}>
                {/* <Nav.Link>My Profile</Nav.Link>
                <Nav.Link>My Orders</Nav.Link>
                <NavDropdown.Divider /> */}
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </NavDropdown>)
              :(
                <Nav>
                  <LinkContainer to="/signup"><Nav.Link>Signup</Nav.Link></LinkContainer>
                  <LinkContainer to="/login"><Nav.Link>Login</Nav.Link></LinkContainer>
              </Nav>
              )}
              <LinkContainer to="/cart">
                <Nav.Link>
                  <GiShoppingCart size='2em' className='cart' />
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg='danger'>
                      {cart.cartItems.reduce((accum,current)=> accum+current.qty, 0)}
                    </Badge>
                  )}
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavigationBar