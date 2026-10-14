import "./NumerosPares.css"

function NumerosPares(props){
    return(
        <ul className="NumerosPares_lista">
            {props.numeros.map((listaNumeros, index) => {
                if (listaNumeros % 2 === 0) {
                    return (
                        <li key={index}>
                            {listaNumeros}
                        </li>
                    );
                }
            })}
        </ul>
    )
}

export default NumerosPares;