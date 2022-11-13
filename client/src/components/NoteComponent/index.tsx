import { InfoWindow, Marker } from "@react-google-maps/api";

function NoteComponent(props: any) {
  return (
    <div>
      <Marker
        position={props.pos}
        onClick={props.handler}
        icon={{
          scaledSize: new google.maps.Size(37, 37),
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png",
        }}
      />
      {props.showing && (
        <InfoWindow onCloseClick={props.handler} position={props.pos}>
          <div
            style={{
              width: "150px",
              height: "150px",
            }}
          >
            <h6>{props.note}</h6>
          </div>
        </InfoWindow>
      )}
    </div>
  );
}

export default NoteComponent;
