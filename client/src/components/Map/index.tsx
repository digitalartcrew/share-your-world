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
import { Button } from "react-bootstrap";
import e from "express";

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
    notes: [
      {
        id: 0,
        position: { lat: 18.7557, lng: 73.4091 },
        showing: false,
        note: "Turn right and go into the big pink building here.",
      },
      {
        id: 1,
        position: { lat: 19.076, lng: 72.8777 },
        showing: false,
        note: "Turn left and go into the small blue tower here.",
      },
    ],
  });

  const [drawingControlEnabled, setDrawingControlEnabled] = useState(true);
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [currentNote, setCurrentNote] = useState("");
  const [noteCreation, setNoteCreation] = useState(false);

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

  function handleMarkerTap(note: any) {
    // change note.showing value to t/f
    console.log(note);
    setOverlay((overlay) => ({
      ...overlay,
      notes: [
        ...overlay.notes,
        {
          ...note,
          showing: !note.showing,
        },
      ],
    }));
    console.log(note);
    // console.log(showingInfoWindow);
  }

  function createNote(newPos: any, note: any) {
    if (noteCreation) {
      setOverlay((overlay) => ({
        ...overlay,
        notes: [
          ...overlay.notes,
          {
            id: Math.floor(Math.random() * 89999 + 10000),
            position: newPos,
            showing: false,
            note: note,
          },
        ],
      }));

      setNoteCreation(false);
    }
  }

  // function createNote(pos: google.maps.LatLng) {
  //   var note: any = (
  //     <NoteComponent
  //       pos={pos}
  //       handler={() => handleMarkerTap}
  //       showing={showingInfoWindow}
  //       note={currentNote}
  //     ></NoteComponent>
  //   );
  // }

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
      onClick={
        (e) => {
          var lat = e.latLng?.lat();
          var lng = e.latLng?.lng();
          createNote({ lat, lng }, "created note");
        }

        // if note creation mode is true, create note with location of cursor + grab value of textarea from parent.
        // create note then set note creation mode to false
      }
    >
      <Button
        // onClick={
        //   {

        //     /* create note*/
        //   }
        // }
        style={{
          textAlign: "center",
          marginTop: "1rem",
          zIndex: 10000000000,
        }}
      >
        Add Note
      </Button>
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

      {overlay.notes.length !== 0 &&
        overlay.notes.map((note, i) => (
          <NoteComponent
            key={i}
            pos={note.position}
            handler={() => handleMarkerTap(note)}
            showing={note.showing}
            note={note.note}
          />
        ))}
    </GoogleMap>
  ) : null;
};

export default BaseMap;
