import { useContext } from "react"
import { ProdutoContext } from "../../contextProduto/ProdutoContext"


const ListaProduto = () => {
    const { listaProduto } = useContext(ProdutoContext)

    return(
        <>
        <h2>Lista de produtos</h2>
        <span><button>{listaProduto}</button></span>
        </>
    )
}

export default ListaProduto