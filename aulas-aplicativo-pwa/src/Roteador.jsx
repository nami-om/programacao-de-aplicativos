import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PaginaListaProdutos from "./paginas/PaginaListaProdutos/PaginaListaProdutos";

const roteador = createBrowserRouter([
  {
    path: "",
    element: <PaginaInicial />,
  },
  {
    path: "lista-produtos",
    element: <PaginaListaProdutos />,
  },
]);

function Roteador() {
  return <RouterProvider router={roteador} />;
}

export default Roteador;
