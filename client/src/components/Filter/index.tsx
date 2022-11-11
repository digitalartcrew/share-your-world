import { useEffect, useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";

export default function Filter() {
  return (
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
          <Form.Control className="mb-1" type="text" placeholder="State" />
          <Form.Control className="mb-1" type="text" placeholder="Zip Code" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
