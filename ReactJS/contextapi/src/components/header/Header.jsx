import { useContext } from "react"
import { Link } from "react-router-dom"
import { UsuarioContext } from "../../context/UsuarioContext"


const Header = () => {
    const {usuario} = useContext(UsuarioContext)

    return (
        <header>
            <nav>
                <Link to={"/"}>Home</Link>{" "}
                <Link to={"/perfil"}>Perfil</Link>{" "}
                <Link to={"/myPage"}>MyBlog</Link>{" "}
                <Link to={"/produtos"}>Lista de Produtos</Link>{" "}
                <span>( {usuario} )</span>
            </nav>
        </header>
    )
}

export default Header