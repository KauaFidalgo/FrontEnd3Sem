import { useContext } from "react"
import { Link } from "react-router-dom"
import { UsuarioContext } from "../../context/UsuarioContext"


const Header = () => {
    const {usuario, setUsuario} = useContext(UsuarioContext)

    const logout = () => {
        setUsuario(null)//apaga do state
        localStorage.removeItem("usuario")//apaga do local storage
    }

    return (
        <header>
            <nav>
                <Link to={"/"}>Home</Link>{" - "}
                <Link to={"/perfil"}>Perfil</Link>{" - "}
                <Link to={"/myPage"}>MyBlog</Link>{" - "}
                <Link to={"/produtos"}>Lista de Produtos</Link>{" - "}
                <span>( {usuario} )</span>
                <button 
                onClick={() => {
                    logout()
                }}
                    >Sair</button>
            </nav>
        </header>
    )
}

export default Header