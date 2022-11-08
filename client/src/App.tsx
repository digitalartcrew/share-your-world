import React, { ReactElement } from "react";
import './App.css';
// import { Map } from './components/Map';
import { Wrapper, Status } from "@googlemaps/react-wrapper";

// export enum Status {
//   LOADING = 'LOADING',
//   FAILURE = 'FAILURE',
//   SUCCESS = 'SUCCESS',
// }

const render = (status: Status) => {
  return <h1>{status}</h1>;
};


function App() {
  const center = { lat: 41.8781, lng: 87.6298 };
  const zoom = 10;

  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
