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

export const UserDashboardPage = () => {
  return (
    <Container>
      <Row>
        <Col lg="10">
          <Row style={{ marginTop: "1rem" }}>
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
        <Col style={{ backgroundColor: "gray", maxWidth: "100%" }}>
          <Form
            style={{ backgroundColor: "white", padding: "1rem" }}
            className="text-center"
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Filter By</Form.Label>
              <Form.Control className="mb-1" type="text" placeholder="Area" />
              <Form.Control className="mb-1" type="text" placeholder="City" />
              <Form.Control className="mb-1" type="text" placeholder="State" />
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
        </Col>
      </Row>
    </Container>
  );
};
