import "./Multiplicacao.css"

function Multiplicacao(props){
    const numero1 = Number(props.num1);
    const numero2 = Number(props.num2);
    const multiplicacao = numero1 * numero2

    return(
        <div className="Divisao_root">{numero1}*{numero2} = {multiplicacao}</div>
    )
}

export default Multiplicacao;