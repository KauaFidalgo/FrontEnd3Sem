import { useState } from "react"
import "./cadfruta.css"

export default function CadFruta() {
    const [fruta, setFruta] = useState('')
    const [quantia, setQuantidade] = useState('')

    //array para o cadastro de frutas
    const [arrFrutas, setArrFrutas] = useState([
        {id: 1, nome: "Rawany", quantidade: 12},
        {id: 2, nome: "Abacaxi", quantidade: 10},
    ])
    

    function cadastrar(e) {
        e.preventDefault()//não deixa postar o formulario
        setArrFrutas([ 
            ...arrFrutas, 
            { id: Date.now(), 
            nome: fruta,  
            quantidade: quantia}])

        limparCampos()
        return
    }

    function limparCampos() {
        setFruta("")
        setQuantidade(0)
    }


    return(
        <section className="sessao-cadastro">
            <h2>Cadastro</h2>

            <form action="" onSubmit={cadastrar}>

            <fieldset className="cadastro">
                <label htmlFor="fruta" className="cadastro__rotulo">
                    Digite o Nome da Fruta :
                </label>
            </fieldset>
                <br />

                <input 
                type="text" 
                id="fruta" 
                value={fruta}
                placeholder="Ex: Rawany"
                className="cadastro__entrada"
                onChange={(e) => {
                    setFruta(e.target.value)
                }}
                />

                <br />

                <button 
                type="submit"
                className="cadastro__btncadastrar">
                Cadastrar
                </button>

            <fieldset className="cadastro">
                <label htmlFor="Quantidade" className="cadastro___rotulo">
                    Digite a quantidade da Fruta :
                </label>
            </fieldset>

            <br />

            <input 
                type="number" 
                id="Quantidade"
                value={quantia} 
                placeholder="Ex: 10"
                className="cadastro__entrada"
                onChange={(e) => {
                    setQuantidade(e.target.value)
                }}
            />

            <br />

            <button 
                type="submit"
                className="cadastro__btncadastrar">
                Verificar
            </button>

            </form>

                {/* <br />
                <span>{fruta}</span> */}

            <div className="resultados">
                <ul>
                    { //sempre deve usar o 'key', no caso a chave da fruta
                        arrFrutas.map((f) => {
                        return (
                            <li key={f.id}>
                                Fruta : <strong>{f.nome}</strong> |
                                Quantidade : <strong>{f.quantidade}</strong>
                            </li>
                        )
                        })
                    }
                    
                </ul>
            </div>
        </section>
    )
}