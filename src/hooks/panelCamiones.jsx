import React, { useState } from "react";
import "../styles/generalStyles.css";
import { ItemMenu } from "../common/itemMenu";

export function PanelCamiones() {
    const [data, setData] = useState();

    return (
        <div className="contenedor">
            <h1 style={{ color: "white" }}>Panel camiones</h1>

            <div className="menu-contenedor">
            <ItemMenu />
                <ItemMenu />
                <ItemMenu />
                <ItemMenu />
                <ItemMenu />
                <ItemMenu />
                <ItemMenu />
                <ItemMenu />
                <ItemMenu />
                <ItemMenu />
            </div>
        </div>

    );
}