import React, { useEffect, useRef, useState } from "react";
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
  StandaloneSearchBox,
  Autocomplete,
} from "@react-google-maps/api";
import NoteComponent from "../NoteComponent";
import { Button } from "react-bootstrap";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

export const ViewMap = (props: any) => {
  const [libraries]: any = useState(["places", "drawing"]);
  let editableMap: any = useRef(null);
  let autolat: any;
  let autolong: any;

  const [overlay, setOverlay] = useState({
    bounds: {
      north: 19.137384,
      south: 18.510866,
      west: 72.874748,
      east: 73.879864,
    },
    notes: [
      {
        id: 55319,
        position: {
          lat: 21.28461141883548,
          lng: -157.82807219451922,
        },
        showing: false,
        note: "This area right here has the MOST crabs. Every time I go there, I catch at LEAST 5 of them.",
      },
      {
        id: 56135,
        position: {
          lat: 21.283536736461976,
          lng: -157.8263233942415,
        },
        showing: false,
        note: "I like to take my dog Leo over here when my son and I go fishing. ",
      },
      {
        id: 46758,
        position: {
          lat: 21.285407956824425,
          lng: -157.8293478103817,
        },
        showing: false,
        note: "You need a boat to get out here, but this strip is where all the big fish hang out. Easiest catch ever.",
      },
      {
        id: 40334,
        position: {
          lat: 21.285877330632264,
          lng: -157.82875252131487,
        },
        showing: false,
        note: "Worms are in some of the  gardens over here, in case you forget bait.",
      },
    ],
  });
  const [drawingControlEnabled, setDrawingControlEnabled] = useState(true);
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [currentNote, setCurrentNote] = useState("");
  const [noteCreation, setNoteCreation] = useState(props.creating);
  const [center, setCenter] = useState({
    lat: 52.52549080781086,
    lng: 13.398118538856465,
  });

  const [autocomplete, setAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDtyLPypOCu_c4y_SNfCXGTlM7TnF6X2bI",
    libraries: libraries,
  });

  const position = { lat: 18.7557, lng: 73.4091 };

  function handleMarkerTap(note: any) {
    console.log(note);
    setOverlay({
      ...overlay,
      notes: [
        ...overlay.notes,
        {
          ...note,
          showing: !note.showing,
        },
      ],
    });
    console.log(note);
  }

  function createNote(newPos: any) {
    if (props.creating) {
      setOverlay((overlay) => ({
        ...overlay,
        notes: [
          ...overlay.notes,
          {
            id: Math.floor(Math.random() * 89999 + 10000),
            position: newPos,
            showing: false,
            note: props.note,
          },
        ],
      }));
    }
  }

  function onLoaded(autocmp: any) {
    console.log("autocomplete: ", autocmp);

    setAutocomplete(autocmp);
  }

  function onPlaceChanged() {
    if (autocomplete !== null) {
      autolat = autocomplete.getPlace().geometry?.location?.lat();
      autolong = autocomplete.getPlace().geometry?.location?.lng();
      console.log(autolat);

      console.log(autolong);

      console.log(editableMap.current);
    } else {
      console.log("Autocomplete is not loaded yet!");
    }
  }

  return isLoaded ? (
    <GoogleMap
      ref={editableMap}
      id="editmap"
      mapContainerStyle={containerStyle}
      zoom={3}
      center={center}
      onClick={(e) => {
        var lat = e.latLng?.lat();
        var lng = e.latLng?.lng();
        createNote({ lat, lng });
      }}
    >
      <Autocomplete onLoad={onLoaded} onPlaceChanged={onPlaceChanged}>
        <input
          type="text"
          placeholder="Search location..."
          style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `240px`,
            height: `32px`,
            padding: `0 12px`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            outline: `none`,
            textOverflow: `ellipses`,
            position: "absolute",
            left: "50%",
            marginLeft: "-120px",
          }}
        />
      </Autocomplete>

      <DrawingManager
        options={{
          drawingControl: drawingControlEnabled,
          drawingControlOptions: {
            position: google.maps.ControlPosition.BOTTOM_CENTER,
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

export default ViewMap;
