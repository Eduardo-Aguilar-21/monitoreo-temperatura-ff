import { MapaBase } from "../maps/mapaBase";

export function PanelMapa() {
    const datos = [
        {
            id: 1,
            nombre: "Ruta 1",
            coordenadas: [
                [-76.958, -12.036],
                [-76.960, -12.038],
                [-76.962, -12.040],
                // Agrega más coordenadas según sea necesario
            ]
        },
        {
            id: 2,
            nombre: "Ruta 2",
            coordenadas: [
                [-76.965, -12.032],
                [-76.963, -12.034],
                [-76.961, -12.036],
                // Agrega más coordenadas según sea necesario
            ]
        },
        // Agrega más objetos de ruta según sea necesario
    ];
    return (
        <>
            <h1>h22</h1>
            <div style={{ width: "100%", height: "600px"}}>
                <MapaBase buses={datos} />
            </div>
        </>
    );
}