import { useEffect, useState } from "react"
import { UsuarioContext } from "./UsuarioContext"

const UsuarioProvider = ( {children} ) => {
    const [usuario, setUsuario] = useState(null)
    //const [listaUsuario, setListaUsuario] = useState([])


    //ciclo de vida
    useEffect(() => {
        //ao montar o componente, pega os dados do local
        const usuarioLogado = JSON.parse(localStorage.getItem("usuario")) || ""
        setUsuario(usuarioLogado)
        
    }, [])

    return(
        <UsuarioContext.Provider
            value={{
                usuario, 
                setUsuario
            }}
        >
            {children}
        </UsuarioContext.Provider>
    )
}

export default UsuarioProvider