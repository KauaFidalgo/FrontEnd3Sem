import './App.css'
import CadastroProdutoPage from './pages/cadastroproduto/cadastroprodutopage'
import HomePage from './pages/home/homepage'
import QuemSomosPage from './pages/quemsomos/quemsomospage'
import CadastroFrutaPage from './pages/cadastrofruta/cadastrofrutapage'
import Header from './components/header/header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


export default function App() {
  return(
    <>

      <BrowserRouter>
      <Header />
        <Routes>
          <Route element= {<HomePage />} path='/'/>
          <Route element= {<QuemSomosPage />} path='/quemsomos'/>
          <Route element= {<CadastroFrutaPage />} path='/frutas'/>
          <Route element= {<CadastroProdutoPage />} path='/produtos'/>
        </Routes>
      </BrowserRouter>

    </>
  )
}