import { useState } from "react";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import { BsTrash } from "react-icons/bs";
import "./PaginaListaTarefas.css";

function PaginaListaTarefas() {
  const [descricaoTarefa, setDescricaoTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (descricaoTarefa.trim()) {
      const novaTarefa = { id: Date.now(), descricao: descricaoTarefa };
      setTarefas([...tarefas, novaTarefa]);
      setDescricaoTarefa("");
    } else {
      alert("Tarefa obrigatória");
    }
  };

  const removerTarefa = (id) => {
    if (confirm("Deseja mesmo remover a tarefa?")) {
      const tarefasAtualizadas = tarefas.filter((item) => item.id !== id);
      setTarefas(tarefasAtualizadas);
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
