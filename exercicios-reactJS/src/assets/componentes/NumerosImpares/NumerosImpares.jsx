import "./NumerosImpares.css"

function NumerosImpares(props){
    return(
        <ul className="NumerosImpares_lista">
            {props.numeros.map((listaNumeros, index) => {
                if(listaNumeros%2 != 0){
                    return(
                        <li key={index}>{listaNumeros}</li>
                    )
                }
            })}
        </ul>
    )
}

export default NumerosImpares;