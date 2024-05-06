import { PanelCamiones } from "./pages/panelCamiones";
import { MapaBase } from "./maps/mapaBase";
import { PanelMapa } from "./pages/panelMapa";

// Array of route definitions for the application
export const routes = [
    // Default route
    { path: "/", component: <PanelCamiones /> },
    { path: "/ver-Mapa", component: <PanelMapa /> },
]