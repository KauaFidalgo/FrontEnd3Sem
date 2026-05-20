import { BrowserRouter, Routes, Route } from "react-router-dom"
import CadastroFilme from "../pages/cadastroFilmes/CadastroFilme"
import CadastroGenero from "../pages/cadastroGenero/CadastroGenero"
import Login from "../pages/login/Login"

//arrow function
const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/filmes" element={<CadastroFilme />} />
                <Route path="/generos" element={<CadastroGenero />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas