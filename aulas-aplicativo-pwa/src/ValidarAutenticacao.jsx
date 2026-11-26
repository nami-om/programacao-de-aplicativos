import { Outlet } from "react-router-dom";
import { buscarUsuarioLogado } from "./servicos/usuarios.servico";

function ValidarAutenticacao() {
    const usuarioLogado = buscarUsuarioLogado();
    if (!usuarioLogado) {
        window.location.href = "/login";
        return null;
    }
    return <Outlet />;
}

export default ValidarAutenticacao;
