import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Filter from "../Filter";
import BaseMap from "../Map";
import MapTile from "../MapTile";
import { PaginationComponent } from "../PaginationComponent";

export const CreateOverlayPage = ({ value = "" }) => {
  const [textAreaValue, setTextAreaValue] = useState(value);
  const [noteCreation, setNoteCreation] = useState(false);
  const [btnValue, setBtnValue] = useState("blue");

  function toggleCreation() {
    setNoteCreation(!noteCreation);
  }

  function handleChange(event: any) {
    setTextAreaValue(event.target.value);
  }

  return (
    <div
      className="create-overlay-page"
      style={{
        backgroundColor: "lightgray",
      }}
    >
      <Container
        style={{
          marginLeft: "1rem",
        }}
        fluid
      >
        <Row>
          <Col lg="10">
            <Row
              style={{
                marginTop: "1rem",
                marginLeft: "1rem",
                backgroundColor: "lightgray",
              }}
            >
              <BaseMap note={textAreaValue} creating={noteCreation} />
            </Row>
          </Col>
          <Col
            lg="2"
            style={{
              backgroundColor: "lightgray",
              maxWidth: "100%",
              minHeight: "100vh",
            }}
          >
            {/* turn into own component eventually */}
            <Container>
              {/* <div
                style={{
                  backgroundColor: "white",
                  padding: "1rem",
                  marginTop: "1rem",
                }}
              >
                <h6>Map Notes</h6>
                <ul>
                  <li>Note 1</li>
                  <li>Note 2</li>
                  <li>Note 3</li>
                </ul>
              </div> */}
              <Button
                style={{
                  marginTop: "1rem",
                  backgroundColor: noteCreation ? "red" : "#0d6efd",
                  borderColor: noteCreation ? "red" : "#0d6efd",
                }}
                onClick={toggleCreation}
              >
                {noteCreation ? "Cancel" : "Create Notes"}
              </Button>

              <textarea
                style={{
                  marginTop: "1rem",
                }}
                value={textAreaValue}
                onChange={handleChange}
                rows={5}
                cols={20}
              />
              <label>Note content goes above.</label>
            </Container>
            <Button
                style={{
                  marginTop: "1rem",
                  backgroundColor: noteCreation ? "red" : "#0d6efd",
                  borderColor: noteCreation ? "red" : "#0d6efd",
                }}
                onClick={toggleCreation}
              >
               Save Overlay
              </Button>
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </div>
  );
};

/* pseudo
Lock Mechanism
https://developers.google.com/maps/documentation/javascript/examples/control-bounds-restriction




*/
