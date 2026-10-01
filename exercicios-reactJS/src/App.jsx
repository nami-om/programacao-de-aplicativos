import './App.css';
import OlaMundo from './componentes/OlaMundo/OlaMundo';
import DiaAtual from './componentes/DiaAtual/DiaAtual';
import MesAtual from './componentes/MesAtual/MesAtual';
import AnoAtual from './componentes/AnoAtual/AnoAtual';
import HoraAtual from './componentes/HoraAtual/HoraAtual';
import MinutoAtual from './componentes/MinutoAtual/MinutoAtual';

function App() {
  return (
    <>
      <span>
        1. Crie um componente chamado 'OlaMundo' que mostra uma mensagem: "Olá,
        Mundo!!" em uma div com o fundo vermelho, texto centralizado na cor
        azul.
      </span>

      <OlaMundo />
      <hr />

      <span>
        2. Crie um componente chamado 'DiaAtual' que mostra o texto: "15" em uma
        div redonda com o fundo azul, texto centralizado na cor branco.
      </span>

      <DiaAtual />
      <hr />

      <span>
        3. Crie um componente chamado 'MesAtual' que mostra o texto: 
        "03" em uma div com o fundo verde, texto justificado à esquerda na cor branco.
      </span>

      <MesAtual />
      <hr />

      <span>
        4. Crie um componente chamado 'AnoAtual' que mostra o texto: 
        "2024" em uma div com o fundo vermelho, justificado à direita na cor amarelo.
      </span>

      <AnoAtual />
      <hr />

      <span>
        5. Crie um componente chamado 'HoraAtual' que mostra o texto: 
        "20" em uma div redonda 50x50 px centralizada com o fundo azul, texto na cor 
        amarelo. 
      </span>

      <HoraAtual />
      <hr />

      <span>
        6. Crie um componente chamado 'MinutoAtual' que mostra o texto: 
        "30" em uma div redonda 50x50 px centralizada com o fundo rosa, texto na cor 
        preta. 
      </span>

      <MinutoAtual />
      <hr />
    </>
  );
}

export default App;
