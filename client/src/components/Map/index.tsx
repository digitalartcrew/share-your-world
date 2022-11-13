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

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = { lat: 52.52549080781086, lng: 13.398118538856465 };

const locations = [
  { lat: -31.56391, lng: 147.154312 },
  { lat: -33.718234, lng: 150.363181 },
  { lat: -33.727111, lng: 150.371124 },
  { lat: -33.848588, lng: 151.209834 },
  { lat: -33.851702, lng: 151.216968 },
  { lat: -34.671264, lng: 150.863657 },
  { lat: -35.304724, lng: 148.662905 },
  { lat: -36.817685, lng: 175.699196 },
  { lat: -36.828611, lng: 175.790222 },
  { lat: -37.75, lng: 145.116667 },
  { lat: -37.759859, lng: 145.128708 },
  { lat: -37.765015, lng: 145.133858 },
  { lat: -37.770104, lng: 145.143299 },
  { lat: -37.7737, lng: 145.145187 },
  { lat: -37.774785, lng: 145.137978 },
  { lat: -37.819616, lng: 144.968119 },
  { lat: -38.330766, lng: 144.695692 },
  { lat: -39.927193, lng: 175.053218 },
  { lat: -41.330162, lng: 174.865694 },
  { lat: -42.734358, lng: 147.439506 },
  { lat: -42.734358, lng: 147.501315 },
  { lat: -42.735258, lng: 147.438 },
  { lat: -43.999792, lng: 170.463352 },
];

function createKey(location: any) {
  return location.lat + location.lng;
}

export const BaseMap = () => {
  // const [path, setPath] = useState([
  //   { lat: 52.52549080781086, lng: 13.398118538856465 },
  //   { lat: 52.48578559055679, lng: 13.36653284549709 },
  //   { lat: 52.48871246221608, lng: 13.44618372440334 },
  // ]);

  const [bounds, setBounds] = useState({
    north: 19.137384,
    south: 18.510866,
    west: 72.874748,
    east: 73.879864,
  });

  const [drawingControlEnabled, setDrawingControlEnabled] = useState(true);
  const [marker, setMarker] = useState(null);
  const [polyline, setPolyline] = useState(null);
  const [circleRadius, setCircleRadius] = useState(null);
  const [circleCenter, setCircleCenter] = useState(null);
  const [rectangle, setRectangle] = useState(null);
  const [visible, setVisible] = useState(true);

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

  //   function addMarker(location, map, note) {
  //     // Vyberie prvý voľný index, na ktorý uloží marker aby neprepísal už obsadený
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

  //   function attachNote(marker: any, note: any) {
  //     var infowindow = new google.maps.InfoWindow({
  //       content: note,
  //     });

  //     marker.addListener("click", function () {
  //       infowindow.open(marker.get("map"), marker);
  //     });
  //   }

  return isLoaded ? (
    <GoogleMap
      id="marker-example"
      mapContainerStyle={containerStyle}
      zoom={3}
      center={center}
      options={{
        restriction: {
          latLngBounds: {
            north: 19.137384, // Mumbai
            south: 18.510866, // Pune
            west: 72.874748, // Mumbai
            east: 73.879864, // Pune
          },
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
      <InfoWindow position={position}>
        <div style={divStyle}>
          <h1>This is how the notes will look once implemented.</h1>
        </div>
      </InfoWindow>
    </GoogleMap>
  ) : null;
};

export default BaseMap;
