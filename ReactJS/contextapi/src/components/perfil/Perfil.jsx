import { useContext, useState } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"

const Perfil = () => {
    // state global
    const { usuario, setUsuario } = useContext(UsuarioContext)
    // state local
    const [novoUsuario, setNovoUsuario] = useState("")

    return(
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
            <button onClick={
                () => {
                    // quero alterar o usuário
                    setUsuario(novoUsuario)
                    //setListaUsuario( [...listaUsuario, novoUsuario] )
                    
                }
            } >Alterar Usuário</button>
        </p>
        </>
    )
}

export default Perfil