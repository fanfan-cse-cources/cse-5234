import {Outlet} from 'umi';
import {Container, Image, Nav, Navbar} from "react-bootstrap";
import Footer from "rc-footer";
import 'rc-footer/assets/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
              alt="Dragon's Wok Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/menu">Menu</Nav.Link>
              <Nav.Link href="/purchase">Order</Nav.Link>
              <Nav.Link href="/purchase/viewOrder">Recent Order</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Image src={require('../assets/banner.png')} width="100%"/>

      <Outlet/>

      <div className={"footer-bar"}></div>

      <Footer className='footer'
              columns={[
                {
                  title: 'Contact US',
                  items: [
                    {
                      title: '920 Boston-Providence Turnpike',
                    },
                    {
                      title: 'Norwood, Maine 02062',
                    },
                    {
                      title: '(781) 769-9600',
                    },
                  ],
                },
                {
                  icon: (
                    <img
                      src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
                      alt="more products"
                    />
                  ),
                  title: 'More Products',
                  items: [
                    {
                      icon: (
                        <img
                          src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg"
                          alt="yuque"
                        />
                      ),
                      title: 'Checkout Counter',
                      description: 'Financial Management',
                    },
                    {
                      icon: (
                        <img
                          src="https://gw.alipayobjects.com/zos/rmsportal/uHocHZfNWZOdsRUonZNr.png"
                          alt="yuque"
                        />
                      ),
                      title: 'Driver Solution',
                      description: 'Deliver Management',
                    },
                  ],
                },
              ]}
              bottom="Made with ❤️"
      />
    </>
  );
}
