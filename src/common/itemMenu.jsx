import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { RiMapPin2Line } from 'react-icons/ri';
import { FaSnowflake, FaSun, FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";

export function ItemMenu({ dato }) {
    const navigation = useNavigate();

    const handleDetails = (id) => {
        localStorage.setItem("camionId", id);
        navigation(`/ver-Mapa`);
    };

    return (
        <div className="item-menu" onClick={() => handleDetails(dato.id)}>
            <h3>Placa ABC-123 {/*dato.nombre*/}</h3>
            <p> Temperatura actual: 20°C </p>
            <p> <FaTemperatureLow />  <FaSnowflake /> <FaSun /> <FaTemperatureHigh /></p>

            <Button variant="primary">
                <RiMapPin2Line /> Ver en el mapa
            </Button>
            {   /*    <img src={icono} alt="Icono" /> */}
        </div>
    );
}  