import { InfoWindow, Marker } from "@react-google-maps/api";

function NoteComponent(props: any) {
  return (
    <div>
      <Marker
        position={props.pos}
        onClick={props.handler}
        icon={{
          scaledSize: new google.maps.Size(30, 37),
          url: "https://cdn-icons-png.flaticon.com/512/5094/5094288.png",
        }}
      />
      {props.showing && (
        <InfoWindow onCloseClick={props.handler} position={props.pos}>
          <div
            style={{
              width: "100px",
              height: "100px",
            }}
          >
            <p>{props.note}</p>
          </div>
        </InfoWindow>
      )}
    </div>
  );
}

export default NoteComponent;
