import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { RiMapPin2Line } from "react-icons/ri";
import { FaSnowflake, FaSun, FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";

export function ItemMenu({ dato }) {
  const navigation = useNavigate();

  const handleDetails = (id) => {
    localStorage.setItem("camionId", id);
    navigation(`/ver-Mapa`);
  };
 
  const isHot = dato.temperaturaActual > 25;
  const TemperatureIcon = isHot ? FaSun : FaSnowflake;
  const temperatureClassName = isHot ? "hot" : "cold";
 
  return (
    <div className="item-menu" onClick={() => handleDetails(dato.id)}>
      <h3>Placa {dato.placa}</h3>

      <p style={{ fontSize: "20px" }}>
        <p>Temperatura actual: </p>
        {dato.temperaturaActual}°C <TemperatureIcon className={temperatureClassName} />
      </p>

      <Button variant="primary">
        <RiMapPin2Line /> Ver en el mapa
      </Button>
    </div>
  );
}
