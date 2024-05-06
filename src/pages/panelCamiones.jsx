import React, { useState } from "react";
import "../styles/generalStyles.css";
import { ItemMenu } from "../common/itemMenu";
import { useListarElementos, useListarElementosPaginados } from "../hooks/crudHooks";
import { camionesPaginadosURL, camionesURL } from "../api/apiurls";
import { PaginacionUtils } from "../hooks/paginacionUtils";

export function PanelCamiones() {
 // const [data, setData] = useState();
  const [pageNumber, setPageNumber] = useState(0);

  const { datos, totalPages, currentPage, setCurrentPage, fetchData } = useListarElementosPaginados(`${camionesPaginadosURL}`, pageNumber);

  //useListarElementosPaginados(`${camionesPaginadosURL}`, setData);

  return (
    <div className="contenedor">
      <h1 style={{ color: "white" }}>Panel camiones</h1>

      <div className="menu-contenedor">
        {datos && datos.map((d, index) => <ItemMenu key={index} dato={d} />)}
        <PaginacionUtils setPageNumber={setPageNumber} setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  );
}
