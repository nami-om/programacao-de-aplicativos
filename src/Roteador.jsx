import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const roteador = createBrowserRouter([
  {
    path: "",
    element: <PaginaInicial />,
  },
]);


function Roteador(){
    return  <RouterProvider router={roteador} />;

}

export default Roteador;