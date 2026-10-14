import "./TamanhoTexto.css"

function TamanhoTexto(props){
    const caracteresTexto = Number(props.texto.length)

    return(
        <div className="TamanhoTexto_root">O texto possui {caracteresTexto} caracteres.</div>
    )
}

export default TamanhoTexto;