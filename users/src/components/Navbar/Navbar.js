import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="md" className="me-auto">
      <Col>
      <Navbar.Brand>
      <img
              alt=""
              src="https://drive.google.com/uc?export=view&id=1Hj1rjs9d8mSbQp3LTRMkKh3Xwvck0QA2"
              width="130"
              height="50"
              className="d-inline-block align-top"
            />{' '}

      </Navbar.Brand>
      </Col>
      
      <Container fluid>
      <Navbar.Brand>
      <img
              alt=""
              src="https://drive.google.com/uc?export=view&id=1Hj1rjs9d8mSbQp3LTRMkKh3Xwvck0QA2"
              width="130"
              height="50"
              border-radius="50%"
              className="nav_circular_image"
            />{' '}

      </Navbar.Brand>
     
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <Nav
            className="me-auto my-0 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
             <Col>
             <Navbar.Text href="#" disabled>
              Himani
            </Navbar.Text>
            </Col>
            <Col>
            <NavDropdown title="" id="navbarScrollingDropdown mx-auto">
              <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Settings
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
            </Col>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
     
    </Navbar>
  );
}

export default NavScrollExample;