import Produto from '../ex2/produto/produto'
import './Produtos.css'

export default function Produtos() {
    const produtos = [
        {
            nome: "Davi de Brinquedo",
            preco: 1930.99,
            descricao: "Davi dourado!"
        },
        {
            nome: "Julio de Brinquedo",
            preco: 3360.99,
            descricao: "Você não vai esquecer a pegada dele!"
        }
    ]

    return(
        produtos.map((produtao) => {
            return (
            <Produto
                nome={produtao.nome}
                preco={produtao.preco}
                descricao={produtao.descricao}
            />
            )
        })
    )
}