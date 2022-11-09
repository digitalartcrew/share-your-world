import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Button, Image, NavDropdown } from "react-bootstrap";

const MainNavbar = () => {
  const toggleForm = () => {};
  return (
    <Navbar expand="lg" style={{ backgroundColor: "lightgray" }}>
      <Container>
        <Navbar.Brand href="dashboard">Overlay</Navbar.Brand>

        <Nav className="me-auto"></Nav>
        <Navbar.Toggle />
        <NavDropdown
          className="text-center dropleft"
          title={
            <span>
              <Image
                src={"https://avatars.githubusercontent.com/u/10134023?v=4"}
                alt="UserName profile image"
                roundedCircle
                style={{ width: "40px" }}
              />
            </span>
          }
          id="collapsible-nav-dropdown"
        >
          <NavDropdown.Item href="profile">Profile</NavDropdown.Item>
          <NavDropdown.Item href="settings">Settings</NavDropdown.Item>
          <NavDropdown.Item href="signout">Sign Out</NavDropdown.Item>
        </NavDropdown>
        <Navbar.Collapse className="justify-content-end text-center">
          <Nav>
            <Nav.Link href="dashboard">Dashboard</Nav.Link>
            <Button style={{ marginRight: "1rem" }}>Create Overlay</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
