import { InfoWindow, Marker } from "@react-google-maps/api";

function NoteComponent(props: any) {
  return (
    <div>
      <Marker
        position={props.pos}
        onClick={props.handler}
        icon={{
          scaledSize: new google.maps.Size(30, 37),
          url: "https://uxwing.com/wp-content/themes/uxwing/download/file-and-folder-type/paper-icon.png",
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
            <h6>{props.note}</h6>
          </div>
        </InfoWindow>
      )}
    </div>
  );
}

export default NoteComponent;
