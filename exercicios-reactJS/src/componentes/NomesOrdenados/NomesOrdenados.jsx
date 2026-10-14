import "./NomesOrdenados.css"

function NomesOrdenados(props){
    const ordemAlfabetica = props.nomes.sort()
    return(
        <ol className="NomesOrdenados_root">
            {ordemAlfabetica.map((listaNomes, index) => {
                return(
                    <li key={index}>{listaNomes}</li>
                )
            })}
        </ol>
    )

}

export default NomesOrdenados;