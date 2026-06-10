import { useContext, useState } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"

const Perfil = () => {
    // state global
    const { usuario, setUsuario } = useContext(UsuarioContext)
    // state local
    const [novoUsuario, setNovoUsuario] = useState("")

    const login = () => {

        setUsuario(novoUsuario)

        // pegar o dado e colocar no storage
        localStorage.setItem("usuario", JSON.stringify(novoUsuario))
        setNovoUsuario("")
    }

    return (
        <>
            <h2>Página Perfil do usuário</h2>
            <span>Usuário: {usuario}</span>
            <p>
                <input
                    type="text"
                    placeholder="Novo Usuário"
                    onChange={(e) => {
                        setNovoUsuario(e.target.value)
                        
                    }}
                />
                <br/>
                <button onClick={
                    () => {
                        login()
                    }} >
                        Entrar
                </button>
            </p>
        </>
    )
}

export default Perfil