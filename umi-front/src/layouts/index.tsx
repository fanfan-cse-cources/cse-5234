import { Link, Outlet } from 'umi';
import styles from './index.less';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

export default function Layout() {
  return (
    <>
      <Navbar bg="light" expand="md">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={require('../assets/logo.png')}
              width="35"
              height="35"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/purchase">Purchase</Nav.Link>
              <Nav.Link href="/purchase/viewOrder">View Orders</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}
