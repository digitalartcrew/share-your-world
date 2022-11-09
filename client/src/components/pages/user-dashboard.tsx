import React from "react";
import {
  Button,
  Card,
  CardGroup,
  Col,
  Container,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import LoginForm from "../LoginForm";
import MapTile from "../MapTile";
import { PaginationComponent } from "../PaginationComponent";

export const UserDashboardPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col lg="10">
          <Row style={{ marginTop: "1rem", marginLeft: "1rem" }}>
            <MapTile></MapTile>
            <MapTile></MapTile>
            <MapTile></MapTile>
            <MapTile></MapTile>
            <MapTile></MapTile>
            <MapTile></MapTile>
            <MapTile></MapTile>
            <MapTile></MapTile>
          </Row>
        </Col>
        <Col
          lg="2"
          style={{
            backgroundColor: "gray",
            maxWidth: "100%",
            minHeight: "100vh",
          }}
        >
          <Container className="text-center">
            <Button style={{ marginTop: "1rem" }}>Create New Overlay</Button>
            <Form
              style={{
                backgroundColor: "white",
                padding: "1rem",
                marginTop: "1rem",
              }}
              className="text-center"
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Filter By</Form.Label>
                <Form.Control className="mb-1" type="text" placeholder="Area" />
                <Form.Control className="mb-1" type="text" placeholder="City" />
                <Form.Control
                  className="mb-1"
                  type="text"
                  placeholder="State"
                />
                <Form.Control
                  className="mb-1"
                  type="text"
                  placeholder="Zip Code"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </Col>
      </Row>
      <Row>
        <PaginationComponent />
      </Row>
    </Container>
  );
};
