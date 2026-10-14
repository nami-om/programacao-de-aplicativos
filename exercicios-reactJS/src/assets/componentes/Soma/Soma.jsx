import "./Soma.css"

function Soma(props){
    const numero1 = Number(props.num1)
    const numero2 = Number(props.num2)
    const soma = numero1 + numero2

    return(
        <div className="Soma_root">{numero1}+{numero2} = {soma}</div>
    )
}

export default Soma;