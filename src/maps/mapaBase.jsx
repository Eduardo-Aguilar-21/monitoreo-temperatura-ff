import React, { useEffect, useRef, useState } from "react";
import "ol/ol.css";
import { addMarker, useCreateMap, useShowMapAfterDelay } from "../hooks/mapHooks";
import "../styles/generalStyles.css";
import { fromLonLat } from "ol/proj";

//const initialPosition = [-76.95769789314294, -12.036776926858456];

export function MapaBase({ buses, rutas, initialPosition }) {
  const [map, setMap] = useState(null);
  const mapRef = useRef(null);
  const showMap = useShowMapAfterDelay(20);
  const createMap = useCreateMap(mapRef, initialPosition, setMap);

  useEffect(() => {
    if (showMap && mapRef.current) {
      createMap();
    }
  }, [showMap, createMap]);

  useEffect(() => {
    if (map && buses) {
      if (Array.isArray(buses)) {
        buses.forEach((bus) => {
          const busPosition = [bus.longitud, bus.latitud];
          addMarker(map, busPosition, "busesIcono", bus.placa);
        });
      } else {
        const busPosition = [buses.longitud, buses.latitud];
        addMarker(map, busPosition, "busesIcono", buses.placa);
      }
    }
  }, [map, buses]);

  return <>{showMap && <div ref={mapRef} className="mapa" />}</>;
}
