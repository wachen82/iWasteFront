import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Header = ()=> {
      return (
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                      <Navbar.Brand href="/home">iWaste</Navbar.Brand>
                      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                      <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                  <Nav.Link href="/home">Home</Nav.Link>

                                  <NavDropdown title="Waste" id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="/dashboard">Dashboard</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/waste">Add new waste record</NavDropdown.Item>
                                  </NavDropdown>
                                  <NavDropdown title="Vendor" id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="/vendor/list">Vendors list</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/vendor">Add new vendor </NavDropdown.Item>
                                  </NavDropdown>
                                  <NavDropdown title="Waste-Types" id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="/vendor/list">Waste types list</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/vendor">Add new waste type </NavDropdown.Item>
                                  </NavDropdown>
                            </Nav>
                            <Nav>
                                  <Nav.Link eventKey={2} href="/login">Log in</Nav.Link>
                            </Nav>
                      </Navbar.Collapse>
                </Container>
          </Navbar>
      );
}

