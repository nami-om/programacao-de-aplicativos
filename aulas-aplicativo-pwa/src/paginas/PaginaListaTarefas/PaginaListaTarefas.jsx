import { useState } from "react";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import { BsTrash } from "react-icons/bs";
import "./PaginaListaTarefas.css";
import { toast } from "react-toastify";
import {
  buscarNoLocalStorage,
  salvarNoLocalStorage,
} from "../../servicos/localstorage.servico";

function PaginaListaTarefas() {
  const [descricaoTarefa, setDescricaoTarefa] = useState("");
  const [tarefas, setTarefas] = useState(buscarNoLocalStorage("tarefas", []));

  const adicionarTarefa = () => {
    if (descricaoTarefa.trim()) {
      const novaTarefa = { id: Date.now(), descricao: descricaoTarefa };
      const tarefasAtualizadas = [...tarefas, novaTarefa];
      setTarefas(tarefasAtualizadas);
      setDescricaoTarefa("");
      salvarNoLocalStorage("tarefas", tarefasAtualizadas);
      toast.success("Tarefa adicionada com sucesso!");
    } else {
      toast.error("Preencha o campo tarefa!");
    }
  };

  const removerTarefa = (id) => {
    if (confirm("Deseja mesmo remover a tarefa?")) {
      const tarefasAtualizadas = tarefas.filter((item) => item.id !== id);
      setTarefas(tarefasAtualizadas);
      salvarNoLocalStorage("tarefas", tarefasAtualizadas);
    }
  };

  return (
    <Principal titulo="Lista de Tarefas" returnTo="/">
      <CampoCustomizado
        label="Tarefa"
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={descricaoTarefa}
        onChange={(e) => setDescricaoTarefa(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            adicionarTarefa();
          }
        }}
      />

      <BotaoCustomizado tipo="primario" aoClicar={adicionarTarefa}>
        Adicionar Tarefa
      </BotaoCustomizado>

      {tarefas.map((item) => {
        return (
          <div key={item.id} className="PaginaListaTarefas_item">
            {item.descricao}
            <BsTrash color="red" onClick={() => removerTarefa(item.id)} />
          </div>
        );
      })}
    </Principal>
  );
}

export default PaginaListaTarefas;
