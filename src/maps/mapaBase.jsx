import React, { useEffect, useRef, useState } from "react";
import "ol/ol.css";
import { addMarker, useCreateMap, useShowMapAfterDelay } from "../hooks/mapHooks";

const position = [-76.95769789314294, -12.036776926858456];
export function MapaBase({ buses, rutas }) {
    const [map, setMap] = useState(null);
    // Referencia al elemento del mapa
    const mapRef = useRef(null);

    // Estado para controlar quw se  muestre el mapa después de un retraso
    const showMap = useShowMapAfterDelay(20);

    // Función para crear el mapa utilizando el hook personalizado
    const createMap = useCreateMap(mapRef, position, setMap);

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