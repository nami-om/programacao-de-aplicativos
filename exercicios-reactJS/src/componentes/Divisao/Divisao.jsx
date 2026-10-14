import "./Divisao.css"

function Divisao(props){
    const numero1 = Number(props.num1);
    const numero2 = Number(props.num2);
    const divisao = numero1 / numero2

    return(
        <div className="Divisao_root">{numero1}/{numero2} = {divisao}</div>
    )
}

export default Divisao;