import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UsuarioContext } from "../context/UsuarioContext";

const PrivateRoute = ({ children }) => {
    //recupera os dados do usuario
    const {usuario} = useContext(UsuarioContext)
    //se o usuario estiver logado pode acessar (children)
    //senao redireciona para a Home
    return usuario ? children : <Navigate to="/" />

}

export default PrivateRoute