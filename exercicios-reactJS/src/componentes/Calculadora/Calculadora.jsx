import "./Calculadora.css"

function Calculadora(props) {
    const numero1 = Number(props.num1)
    const numero2 = Number(props.num2)

    switch (props.equacao) {
        case "soma":
            return (
                <div className="Calculadora_root">{numero1}+{numero2} = {numero1 + numero2}</div>
            )
        case "subtracao":
            return (
                <div className="Calculadora_root">{numero1}-{numero2} = {numero1 - numero2}</div>
            )
        case "multiplicacao":
            return (
                <div className="Calculadora_root">{numero1}*{numero2} = {numero1 * numero2}</div>
            )
        case "divisao":
            return (
                <div className="Calculadora_root">{numero1}/{numero2} = {numero1 / numero2}</div>
            )
    }
}

export default Calculadora;