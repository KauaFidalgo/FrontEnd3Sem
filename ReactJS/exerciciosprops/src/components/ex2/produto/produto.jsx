import "./produto.css"

function Produto({nomeP, preco, descricao}) {
    return (
        <p>
            Nome do Produto : {nomeP} |
            Preco : {preco} |
            Descricao : {descricao}
        </p>
    )
}


export default Produto