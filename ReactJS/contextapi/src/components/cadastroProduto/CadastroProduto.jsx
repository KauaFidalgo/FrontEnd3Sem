import { ProdutoContext } from "../../contextProduto/ProdutoContext"
import { useContext, useState } from "react"

const CadastroProduto = () => {
    const { listaProduto, setListaProduto } = useContext(ProdutoContext)

    const [novoProduto, setNovoProduto] = useState("")
    const [preco, setPreco] = useState("")

    const cadastrarProduto = () => {
        const produto = {
            nome: novoProduto,
            preco: preco
        }

        setListaProduto([...listaProduto, produto])

        setNovoProduto("")
        setPreco("")
    }

    return (
        <>
            <input
                type="text"
                placeholder="Nome do produto"
                value={novoProduto}
                onChange={(e) => setNovoProduto(e.target.value)}
            />

            <input
                type="number"
                placeholder="Preço"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
            />

            <button onClick={cadastrarProduto}>
                Cadastrar
            </button>
        </>
    )
}

export default CadastroProduto