import { MapaBase } from "../maps/mapaBase";
import { useListarElementos } from "./../hooks/crudHooks";
import { camionesURL } from "./../api/apiurls";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { FaSnowflake, FaSun, FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";

export function PanelMapa() {
  const navigation = useNavigate();

  const [buses, setBuses] = useState();
  const camionId = localStorage.getItem("camionId");
  useListarElementos(`${camionesURL}/${camionId}`, setBuses);

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

      <div style={{ margin:"auto",width: "80%", height: "120px", border: "3px solid white" }}>
        <h1>Placa ABC</h1>
        <h2>Temperatura Actual 32 <TemperatureIcon className={temperatureClassName} /></h2>
      </div>

      
      <div style={{ width: "100%", height: "600px" }}>
        <MapaBase buses={buses} />
      </div>
    </div>
  );
}
