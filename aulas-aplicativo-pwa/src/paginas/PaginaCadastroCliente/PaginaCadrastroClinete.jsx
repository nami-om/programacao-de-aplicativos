import { useState } from "react";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import Principal from "../../componentes/Principal/Principal";

function PaginaCadastroCliente() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");

  const salvar = () => {
    const cliente = {
      nome,
      email,
      dataNascimento,
      telefone,
      cpf,
    };
    console.log(cliente);
  };

  return (
    <Principal titulo="Novo Cliente" returnTo="/">
      <CampoCustomizado
        label="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value.replace(/[^A-Za-zÀ-ÿ\s]/g, ""))}
      />
      <CampoCustomizado
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <CampoCustomizado
        label="Data de nascimento"
        type="date"
        value={dataNascimento}
        onChange={(e) => setDataNascimento(e.target.value)}
      />
      <CampoCustomizado
        label="Telefone"
        type="number"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />
      <CampoCustomizado
        label="CPF"
        type="text"
        value={cpf}
        onChange={(e) => setCpf(e.target.value.replace(/\D/g, ""))}
      />

      <BotaoCustomizado tipo="primario" aoClicar={salvar}>
        Salvar
      </BotaoCustomizado>
    </Principal>
  );
}

export default PaginaCadastroCliente;
