import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const LoginForm =() => {
    return (
        <div>Login Form</div>
    )
}

const SignUpForm =() => {
    return (
        <div>Login Form</div>
    )
}

const MainNavbar = () => {
    const toggleForm = () => {
    }
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Share Your World</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="#dashboard">Dashboard</Nav.Link>
          </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Nav>
            <Nav.Link onClick={toggleForm}>Login</Nav.Link>
            <Nav.Link onClick={toggleForm}>Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;