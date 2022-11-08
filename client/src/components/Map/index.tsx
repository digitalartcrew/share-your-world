import React, { useRef, useEffect } from "react";

export const Map = ({
  center,
  zoom,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   new window.google.maps.Map(ref.current, {
  //     center,
  //     zoom,
  //   });
  // });

  return <div ref={ref} id="map"></div>;
}
