import {Outlet} from 'umi';
import {Container, Image, Nav, Navbar} from "react-bootstrap";

export default function Layout() {
  return (
    <>
      <Navbar bg="light" expand="md">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={require('../assets/logo.png')}
              width="35"
              height="35"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/purchase">Order Now</Nav.Link>
              <Nav.Link href="/purchase/viewOrder">View Recent Order</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Image src={require('../assets/banner.png')} fluid/>

      <Outlet/>
    </>
  );
}
