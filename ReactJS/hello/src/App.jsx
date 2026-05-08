import "./App.css";
import Title from './components/title/Title'
import Header from "./components/title/header/Header";
import Subtitle from "./components/title/subtitle/Subtitle";

function App() {
  return (
    <>
      <Title titulo = 'Meu Título'/>
      <Subtitle texto = 'Minha página'/>
      <Subtitle rawany = 'Subtítulo'/>
    </>
  )
}

export default App;
