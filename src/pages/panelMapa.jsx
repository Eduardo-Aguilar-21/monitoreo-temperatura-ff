import { MapaBase } from "../maps/mapaBase";
import { useListarElementos } from "./../hooks/crudHooks";
import { camionesURL } from "./../api/apiurls";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { FaSnowflake, FaSun, FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";
import axios from "axios";
import { useObtenerCentroMapa } from "../hooks/mapHooks";

export function PanelMapa() {
  const navigation = useNavigate();

  const [buses, setBuses] = useState();
  const camionId = localStorage.getItem("camionId");
  //const [positionMap, setPositionMap] = useState();
  useListarElementos(`${camionesURL}/${camionId}`, setBuses);
  const positionMap = useObtenerCentroMapa(`${camionesURL}/${camionId}`);
  const handleBack = () => {
    navigation(-1);
  };

  const isHot = buses && buses.temperaturaActual > 25;
  const TemperatureIcon = isHot ? FaSun : FaSnowflake;
  const temperatureClassName = isHot ? "hot" : "cold";

  return (
    <div className="contenedor">
      <Button onClick={handleBack} variant="primary" className="boton-retroceder">
        Atrás
      </Button>

      <div style={{ margin: "auto", width: "95%", height: "120px", border: "3px solid white" }}>
        <h1 style={{color: 'white' }}>Placa {buses && buses.placa}</h1>
        <h2 style={{color: 'white' }}>
          Temperatura Actual {buses && buses.temperaturaActual} <TemperatureIcon className={temperatureClassName} />
        </h2>
      </div>

      <div style={{ width: "100%", height: "600px" }}>{buses && positionMap && <MapaBase buses={buses} initialPosition={positionMap} />}</div>
    </div>
  );
}
