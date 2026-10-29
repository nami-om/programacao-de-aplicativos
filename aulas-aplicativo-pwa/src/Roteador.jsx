import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PaginaListaProdutos from "./paginas/PaginaListaProdutos/PaginaListaProdutos";
import PaginaListaTarefas from "./paginas/PaginaListaTarefas/PaginaListaTarefas";
import PaginaCadastroCliente from "./paginas/PaginaCadastroCliente/PaginaCadrastroClinete";


const roteador = createBrowserRouter([
  {
    path: "",
    element: <PaginaInicial />,
  },
  {
    path: "lista-produtos",
    element: <PaginaListaProdutos />,
  },

  {
    path: "lista-tarefas",
    element: <PaginaListaTarefas />,
  },

  {
    path: "cadastro-cliente",
    element: <PaginaCadastroCliente />
  }
]);

function Roteador() {
  return <RouterProvider router={roteador} />;
}

export default Roteador;
