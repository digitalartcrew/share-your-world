import { Card } from "react-bootstrap";

function MapTile(props: any) {
  return (
    <Card
      style={{
        width: "15rem",
        backgroundColor: "#F7F7F7",
        marginRight: "1rem",
        marginBottom: "1rem",
      }}
    >
      <Card.Img
        className="border border-dark"
        style={{ marginTop: "1rem", width: "100%" }}
        variant="top"
        src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iy6P.qskNVuU/v0/1200x-1.png"
      />

      <Card.Text style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
        {props.town}
        <br />
        {props.city}
        <br />
        {props.zip}
      </Card.Text>
    </Card>
  );
}

export default MapTile;
