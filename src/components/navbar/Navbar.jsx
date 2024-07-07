import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navbarData from '../../data/navbarData';
import "./navbar.css"


function navbar() {
  if (!navbarData || !navbarData.links) {
    return <div>Loading...</div>; // Veriler yüklenene kadar yedek içerik
  }

  return (
    <Navbar expand="lg" className="nav">
      <Container fluid>
        <Navbar.Brand href="#">{navbarData.brand}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 py-3"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {navbarData.links.map((link, index) => (
              <Nav.Link key={index} href={link.href}>
                {link.text}
              </Nav.Link>
            ))}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-secondary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;