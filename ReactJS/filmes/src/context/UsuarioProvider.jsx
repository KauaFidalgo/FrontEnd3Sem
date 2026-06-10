import { useState } from "react"
import { UsuarioContext } from "./UsuarioContext"

const UsuarioProvider = ({ children }) => {

    const [usuario, setUsuario] = useState(
        localStorage.getItem("token") ? true : false
    )

    return (
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