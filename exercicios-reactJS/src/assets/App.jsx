import './App.css';
import OlaMundo from './componentes/OlaMundo/OlaMundo';
import DiaAtual from './componentes/DiaAtual/DiaAtual';
import MesAtual from './componentes/MesAtual/MesAtual';
import AnoAtual from './componentes/AnoAutal/AnoAtual';
import HoraAtual from './componentes/HoraAtual/HoraAtual';
import MinutoAtual from './componentes/MinutoAtual/MInutoAtual';
import DataCompletaAtual from './componentes/DataCompletaAtual/DataCompletaAtual';
import OlaPessoa from './componentes/OlaPessoa/OlaPessoa';
import ListaProdutos from './componentes/ListaProdutos/ListaProdutos';
import VerificarIdade from './componentes/VerificarIdade/VerificarIdade';
import NumerosPares from './componentes/NumerosPares/NumerosPares';
import NumerosImpares from './componentes/NumerosImpares/NumerosImpares';
import Soma from './componentes/Soma/Soma';
import Subtracao from './componentes/Subtração/Subtracao';
import Divisao from './componentes/Divisao/Divisao';
import Multiplicacao from './componentes/Multiplicacao/Multiplicacao';
import Calculadora from './componentes/Calculadora/Calculadora';
import TamanhoTexto from './componentes/TamanhoTexto/TamanhoTexto';
import NomesOrdenados from './componentes/NomesOrdenados/NomesOrdenados';

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
        "03" em uma div com o fundo verde, texto justificado à esquerda na cor branco
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

      <span>
        7. Crie um componente chamado 'DataCompletaAtual' que mostra o texto:
        "15/03/2024 20:30" em uma div com o fundo marrom, texto centralizado na cor
        branca.
      </span>

      <DataCompletaAtual />
      <hr />

      <span>
        8. Crie um componente chamado 'OlaPessoa' que aceita uma prop chamada 'nome'
        e mostra o texto:
        "Olá, [nome]!" em uma div com o fundo laranja, texto centralizado na cor branca.

      </span>

      <OlaPessoa nome="Athos" />
      <hr />

      <span>
        9. Crie um componente chamado 'ListaProdutos' que aceita uma prop chamada
        'produtos' e deve ser uma lista de nomes de produtos.
        O componente deve listar os itens em tela em uma ul com o fundo roxo e a letra
        amarela.

      </span>

      <ListaProdutos
        produtos={[
          "Celular Samsung",
          "Notebook Acer",
          "Smart TV LG",
          "Impressora HP",
          "Tablet Multilaser",
          "Monitor Dell"
        ]} />


      <span>
        10.Crie um componente chamado 'VerificarIdade' que aceita uma prop chamada
        'idade' e mostra uma mensagem:

        "xx anos, é maior de idade" se a idade for maior ou igual a 18, em uma div
        com o fundo verde e letra amarela;

        "xx anos, é menor de idade" se for menor que 18, em uma div com o fundo
        vermelho e letra amarela.;

        Chame o componente duas vezes, uma para maior de idade e outra para menor de
        idade.

      </span>

      <VerificarIdade idade="16" />

      <span>
        11.Crie um componente chamado 'NumerosPares' que aceita uma prop chamada
        'numeros' e deve ser uma lista de números inteiros.
        O componente deve mostrar uma lista com os números pares em uma ul com o
        fundo azul e a letra amarela.

      </span>

      <NumerosPares
        numeros=
        {[
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11"
        ]} />

      <span>
        12.Crie um componente chamado 'NumerosImpares' que aceita uma prop chamada
        'numeros' e deve ser uma lista de números inteiros.
        O componente deve mostrar uma lista com os números ímpares em uma ul
        com o fundo azul e a letra amarela.

      </span>

      <NumerosImpares
        numeros=
        {[
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11"
        ]} />

      <span>
        13.Crie um componente chamado 'Soma' que aceita as props 'num1', 'num2', o
        componente deve mostrar:
        O resultado da soma entre os dois números em uma div com o fundo marrom,
        texto centralizado na cor branca
      </span>

      <Soma num1="16" num2="24" />

      <span>
        14.Crie um componente chamado 'Subtracao' que aceita as props 'num1', 'num2', o
        componente deve mostrar:
        O resultado da subtração entre os dois números em uma div com o fundo cinza,
        texto centralizado na cor branca.
      </span>

      <Subtracao num1="50" num2="25" />

      <span>
        15.Crie um componente chamado 'Divisao' que aceita as props 'num1', 'num2', o
        componente deve mostrar:
        O resultado da divisão entre os dois números em uma div com o fundo laranja,
        texto centralizado na cor azul.
      </span>

      <Divisao num1="100" num2="5" />

      <span>
        16.Crie um componente chamado 'Multiplicacao' que aceita as props 'num1', 'num2',
        o componente deve mostrar:
        O resultado da multiplicação entre os dois números em uma div com o fundo
        laranja, texto centralizado na cor azul.
      </span>

      <Multiplicacao num1="8" num2="6" />

      <span>
        17.Crie um componente chamado 'Calculadora' que aceita as props 'num1', 'num2' e
        'operacao'. A 'operacao' deve determinar que tipo de operação matemática que
        deve ser realizada (ex: soma, subtracao, multiplicacao, divisao). O componente
        deve mostrar:
        O resultado da operação entre os dois números em uma div com o fundo verde,
        texto centralizado na cor branca
      </span>

      <Calculadora equacao="multiplicacao" num1="5" num2="2" />

      <span>
        18.Crie um componente chamado 'TamanhoTexto' que aceita uma prop chamado
        'texto', o componente deve mostrar:
        O tamanho do texto informado em uma div com o fundo marrom, texto
        justificado à direita na cor amarela.
      </span>

      <TamanhoTexto texto="Meu nome é Athos. Eu tenho 16 anos e gosto de cibersegurança." />

      <span>
        19.Crie um componente chamado 'NomesOrdenados' que aceita uma prop
        chamado 'nomes' e deve ser uma lista com pelo menos 5 nomes de pessoas
        aleatórias e não ordenada. O componente deve mostrar:
        Uma lista ordenada dos nomes em ordem alfabética em uma ol com o fundo
        rosa, texto na cor vermelha.
      </span>

      <NomesOrdenados 
      nomes={[
        "Arline Allison",
        "Elnora Clarke",
        "Freeman Dickson",
        "Lizzie Patterson",
        "Maude Stanton"
      ]}/>


    </>

  );
}

export default App;
