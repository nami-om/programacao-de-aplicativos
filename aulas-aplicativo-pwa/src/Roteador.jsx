import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";
import PaginaListaProdutos from "./paginas/PaginaListaProdutos/PaginaListaProdutos";
import PaginaListaTarefas from "./paginas/PaginaListaTarefas/PaginaListaTarefas";
import PaginaCadastroCliente from "./paginas/PaginaCadastroCliente/PaginaCadrastroCliente";
import PaginaListaClientes from "./paginas/PaginaListaClientes/PaginaListaClientes";
import PaginaCadastroUsuario from "./paginas/PaginaCadastroUsuario/PaginaCadastroUsuario";
import PaginaLogin from "./paginas/PaginaLogin/PaginaLogin";
import ValidarAutenticacao from "./ValidarAutenticacao";

const roteador = createBrowserRouter([
  {
    path: "cadastro-usuario",
    element: <PaginaCadastroUsuario />,
  },

  {
    path: "login",
    element: <PaginaLogin />,
  },

  {
    path: "",
    element: <ValidarAutenticacao />,
    children: [
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
    path: "cadastro-cliente/:id?",
    element: <PaginaCadastroCliente />,
  },
  {
    path: "lista-clientes",
    element: <PaginaListaClientes />,
  },]
  }
]);

function Roteador() {
  return <RouterProvider router={roteador} />;
}

export default Roteador;
