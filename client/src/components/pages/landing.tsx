import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import LoginForm from "../LoginForm";

export const LandingPage = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <Image
            src={
              "https://st4.depositphotos.com/1010613/41685/i/450/depositphotos_416857592-stock-photo-gps-location-search-map-online.jpg"
            }
            alt="UserName profile image"
            style={{ width: "80%", marginTop: "2rem" }}
          />
          <h5 style={{ marginTop: "1rem" }}>Share Your World</h5>
        </Col>
        <Col>
          <Container>
            <LoginForm />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
