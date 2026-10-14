import "./Subtracao.css"

function Subtracao(props){
    const numero1 = Number(props.num1);
    const numero2 = Number(props.num2);
    const subtracao = numero1 - numero2

    return(
        <div className="Subtracao_root">{numero1}-{numero2} = {subtracao}</div>
    )
};

export default Subtracao;