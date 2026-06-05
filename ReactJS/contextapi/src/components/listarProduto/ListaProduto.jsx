import { useContext } from "react"
import { ProdutoContext } from "../../contextProduto/ProdutoContext"
import CadastroProduto from "../cadastroProduto/CadastroProduto"

const ListaProduto = () => {
    const { listaProduto } = useContext(ProdutoContext)

    return (
        <>
            <h2>Lista de produtos</h2>

            <CadastroProduto />

            {listaProduto.map((produto, index) => (
                <div key={index}>
                    <p>Produto: {produto.nome}</p>
                    <p>Preço: R$ {produto.preco}</p>
                    <hr />
                </div>
            ))}
        </>
    )
}

export default ListaProduto