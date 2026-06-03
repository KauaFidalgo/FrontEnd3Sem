import { useState } from "react"
import { UsuarioContext } from "./UsuarioContext"

const UsuarioProvider = ( {children} ) => {
    const [usuario, setUsuario] = useState("Fidalgo")
    //const [listaUsuario, setListaUsuario] = useState([])

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