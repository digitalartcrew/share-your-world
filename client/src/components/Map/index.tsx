import React, { useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  MarkerClusterer,
  MarkerF,
  DrawingManager,
  Polygon,
  Marker,
  Polyline,
  Circle,
  Rectangle,
  LoadScript,
  InfoWindow,
} from "@react-google-maps/api";
import NoteComponent from "../NoteComponent";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = { lat: 52.52549080781086, lng: 13.398118538856465 };

function createKey(location: any) {
  return location.lat + location.lng;
}

export const BaseMap = () => {
  const [overlay, setOverlay] = useState({
    bounds: {
      north: 19.137384,
      south: 18.510866,
      west: 72.874748,
      east: 73.879864,
    },
    notes: [],
  });

  const [drawingControlEnabled, setDrawingControlEnabled] = useState(true);
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [currentNote, setCurrentNote] = useState("");

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDtyLPypOCu_c4y_SNfCXGTlM7TnF6X2bI",
    libraries: ["drawing"],
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  const divStyle = {
    background: `white`,
    border: `1px solid #ccc`,
    padding: 15,
  };

  const position = { lat: 18.7557, lng: 73.4091 };

  const _marker = {
    position: {
      ...position,
    },
    showInfo: true,
  };

  //    addMarker(location, map, note) {
  //     //
  //     var marker = new google.maps.Marker({
  //         position: location,
  //         label: labels[labelIndex++ % labels.length],
  //         map: map,
  //         draggable: true,
  //         editable: true

  //      });

  //     attachNote(marker, note);

  // }

  // }

  //   google.maps.event.addListener(map, 'click', function(event) {
  //     var addNote = prompt("What note would you like to add?");
  //     addMarker(event.latLng, map, poznamka);
  //     var card = new map.card();
  //     card.getBody().innerHTML = poznamka;

  // });

  function handleMarkerTap() {
    setShowingInfoWindow(!showingInfoWindow);
    console.log(showingInfoWindow);
  }

  function createNote(pos: google.maps.LatLng) {
    var note: any = (
      <NoteComponent
        pos={pos}
        handler={() => handleMarkerTap}
        showing={showingInfoWindow}
        note={currentNote}
      ></NoteComponent>
    );
  }

  return isLoaded ? (
    <GoogleMap
      id="marker-example"
      mapContainerStyle={containerStyle}
      zoom={3}
      center={center}
      options={{
        restriction: {
          latLngBounds: overlay.bounds,
          strictBounds: false,
        },
      }}
    >
      <DrawingManager
        options={{
          drawingControl: drawingControlEnabled,
          drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [
              google.maps.drawing.OverlayType.CIRCLE,
              google.maps.drawing.OverlayType.POLYGON,
              google.maps.drawing.OverlayType.POLYLINE,
              google.maps.drawing.OverlayType.RECTANGLE,
            ],
          },
        }}
      />
      {/* <Marker position={position} onClick={() => handleMarkerTap()} />
      {showingInfoWindow && (
        <InfoWindow position={position} onCloseClick={() => handleMarkerTap()}>
          <div
            style={{
              width: "150px",
              height: "150px",
            }}
          >
            <h6>This is how the notes will look once implemented.</h6>
          </div>
        </InfoWindow>
      )} */}
      {overlay.notes.length !== 0 &&
        overlay.notes.map((note, i) => <NoteComponent key={i} />)}
    </GoogleMap>
  ) : null;
};

export default BaseMap;
