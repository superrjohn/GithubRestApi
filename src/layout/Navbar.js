import React from 'react'
import { Outlet, Link} from 'react-router-dom'
import { Navbar, Nav, Container} from 'react-bootstrap'


export default function NavBarExample() {
  return (
    <>
      <Navbar className='navBg' bg="primary" variant="dark" expand="sm">
        <Container>
          <Navbar.Brand as={Link} to='/'>GitHub REST API</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/'>Search</Nav.Link>
              <Nav.Link as={Link} to='About'>About</Nav.Link>
              <Nav.Link as={Link} to='Contact'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section>
        <Outlet/>
      </section>

    </>
  )
}