import "./VerificarIdade.css"

function VerificarIdade(props){
    if(props.idade >= 18 ){
        return(
            <div className="div_maior_idade">{props.idade} é maior de idade.</div>
        )
    }else{
        return(
            <div className="div_menor_idade">{props.idade} é menor de idade.</div>
        )
    }
}

export default VerificarIdade;