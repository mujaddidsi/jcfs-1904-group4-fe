import React from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../../Store/Actions/action';

function Navigation() {
  const dispatch = useDispatch();
  const { username, role } = useSelector((state) => state.auth);

  const onLogoutClick = () => {
    localStorage.removeItem('userData');
    dispatch(logoutAction());
  };

  if (username && role) {
    if (role === 'client') {
      return (
        <>
          <Navbar bg="light" expand="lg" style={{ boxShadow: '0 6px 6px 0 rgb(0, 0, 0, 0.2)' }}>
            <Navbar.Brand href="/" style={{ paddingTop: '2.5px', marginLeft: '25px' }}>
              ezfurniture
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" style={{ marginRight: '25px' }} />
            <Navbar.Collapse id="navbarScroll" style={{ marginLeft: '25px', maxHeight: '300px' }}>
              <Nav className="me-auto" navbarScroll>
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="Products" id="basic-nav-dropdown" style={{ marginTop: '0px', marginInline: '0px' }}>
                  <NavDropdown.Header>Product Category</NavDropdown.Header>
                  <NavDropdown.Item href="/">All Products</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Tables</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Chairs</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Mirrors</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Beds/Mattresses</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Shelves</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Carpets</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Benches</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">TV Brackets</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link" style={{ marginRight: '7px' }}>
                  About Us
                </Nav.Link>
                <Form style={{ display: 'flex' }}>
                  <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
                </Form>
              </Nav>
              <Nav style={{ marginRight: '20px' }}>
                <Nav.Link style={{ color: 'green' }}>{username}</Nav.Link>
                <NavDropdown title="My Account" id="basic-nav-dropdown" style={{ marginTop: '0px', marginInline: '0px' }}>
                  <NavDropdown.Item href="/edit-profile">Edit my Profile</NavDropdown.Item>
                  <NavDropdown.Item href="/my-transactions">My Transactions</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/cart" style={{ color: 'green' }}>
                  My Cart
                </Nav.Link>
                <Nav.Link href="/" style={{ color: 'green' }} onClick={onLogoutClick}>
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </>
      );
    } else if (role === 'admin') {
      return (
        <>
          <Navbar bg="light" expand="lg" style={{ boxShadow: '0 6px 6px 0 rgb(0, 0, 0, 0.2)' }}>
            <Navbar.Brand href="#home" style={{ paddingTop: '2.5px', marginLeft: '25px' }}>
              ezfurniture management
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" style={{ marginRight: '25px' }} />
            <Navbar.Collapse id="navbarScroll" style={{ marginLeft: '25px', maxHeight: '300px' }}>
              <Nav className="me-auto" navbarScroll>
                <Nav.Link href="/manage-products">Manage Products</Nav.Link>
                <Nav.Link href="/manage-transactions">Transactions</Nav.Link>
                <Nav.Link href="/requests" style={{ marginRight: '7px' }}>
                  Requests
                </Nav.Link>
              </Nav>

              <Nav style={{ marginRight: '20px' }}>
                <Nav.Link style={{ color: 'green' }}>{username}</Nav.Link>
                <Nav.Link href="/" style={{ color: 'green' }} onClick={onLogoutClick}>
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </>
      );
    } else if (role === 'super_admin') {
      return (
        <>
          <Navbar bg="light" expand="lg" style={{ boxShadow: '0 6px 6px 0 rgb(0, 0, 0, 0.2)' }}>
            <Navbar.Brand href="#home" style={{ paddingTop: '2.5px', marginLeft: '25px' }}>
              ezfurniture management
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" style={{ marginRight: '25px' }} />
            <Navbar.Collapse id="navbarScroll" style={{ marginLeft: '25px', maxHeight: '300px' }}>
              <Nav className="me-auto" navbarScroll>
                <Nav.Link href="/manage-products">Manage Products</Nav.Link>
                <Nav.Link href="/manage-transactions">Transactions</Nav.Link>
                <Nav.Link href="/manage-warehouse" style={{ marginRight: '7px' }}>
                  Manage Warehouse
                </Nav.Link>
              </Nav>

              <Nav style={{ marginRight: '20px' }}>
                <Nav.Link style={{ color: 'green' }}>{username}</Nav.Link>
                <Nav.Link href="/" style={{ color: 'green' }} onClick={onLogoutClick}>
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </>
      );
    }
  } else {
    return (
      <>
        <Navbar bg="light" expand="lg" style={{ boxShadow: '0 6px 6px 0 rgb(0, 0, 0, 0.2)' }}>
          <Navbar.Brand href="/" style={{ paddingTop: '2.5px', marginLeft: '25px' }}>
            ezfurniture
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" style={{ marginRight: '25px' }} />
          <Navbar.Collapse id="navbarScroll" style={{ marginLeft: '25px', maxHeight: '300px' }}>
            <Nav className="me-auto" navbarScroll>
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Products" id="basic-nav-dropdown" style={{ marginTop: '0px', marginInline: '0px' }}>
                <NavDropdown.Header>Product Category</NavDropdown.Header>
                <NavDropdown.Item href="/">All Products</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Tables</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Chairs</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Mirrors</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Beds/Mattresses</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Shelves</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Carpets</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Benches</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">TV Brackets</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link" style={{ marginRight: '7px' }}>
                About Us
              </Nav.Link>
              <Form style={{ display: 'flex' }}>
                <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
              </Form>
            </Nav>
            <Nav style={{ marginRight: '10px' }}>
              <Nav.Link href="/login" style={{ color: 'green' }}>
                Login
              </Nav.Link>
              <Nav.Link href="/register" style={{ color: 'green' }}>
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Navigation;
