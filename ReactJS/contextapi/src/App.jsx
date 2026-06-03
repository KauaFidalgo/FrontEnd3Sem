import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./components/home/Home"
import './App.css'
import MyPage from './components/mypage/MyPage'
import Perfil from './components/perfil/Perfil'
import Header from './components/header/Header'
import ListaProduto from './components/listarProduto/ListaProduto'

function App() {

  return (
  <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/perfil' element={<Perfil />}  />
        <Route path='/myPage' element={<MyPage />}  />
        <Route path='/produtos' element={<ListaProduto />}  />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
