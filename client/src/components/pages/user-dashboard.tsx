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
            <MapTile town={"Puck's Alley"} city={"Honolulu, HI"} zip={96822} />
            <MapTile town={"Waikiki"} city={"Honolulu, HI"} zip={96822} />
            <MapTile
              town={"Spots at Walls"}
              city={"Honolulu, HI"}
              zip={96822}
            />
            <MapTile
              town={"Best Eats in Waikiki"}
              city={"Honolulu, HI"}
              zip={96822}
            />
            <MapTile
              town={"Top Stores in Honolulu"}
              city={"Honolulu, HI"}
              zip={96822}
            />
            <MapTile
              town={"Restaurants with Amazing Views"}
              city={"Honolulu, HI"}
              zip={96822}
            />
            <MapTile
              town={"Top Skate Spots near Moilili"}
              city={"Honolulu, HI"}
              zip={96822}
            />
            <MapTile
              town={"Best Fishing Spots on the Ala Wai"}
              city={"Honolulu, HI"}
              zip={96822}
            />
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
