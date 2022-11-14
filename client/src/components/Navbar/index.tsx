import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Button, Image, NavDropdown } from "react-bootstrap";
import { matchPath, useLocation } from "react-router-dom";

const MainNavbar = () => {
  const isDashBoardActive = !!matchPath(
    { path: "/dashboard" },
    useLocation().pathname
  );
  console.log(isDashBoardActive);
  const [ isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Navbar expand="lg" style={{ backgroundColor: "lightgray" }}>
      <Container>
        <Navbar.Brand href="dashboard">Overlay</Navbar.Brand>
        {isLoggedIn ? <>
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
            {!isDashBoardActive ? <Button style={{ marginRight: "1rem" }}>Create Overlay</Button> : null}
          </Nav>
        </Navbar.Collapse>
        </>
        : null }
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
