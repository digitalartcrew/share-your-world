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
import Filter from "../Filter";
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
          <Filter />
        </Col>
      </Row>
      <Row>
        <PaginationComponent />
      </Row>
    </Container>
  );
};
