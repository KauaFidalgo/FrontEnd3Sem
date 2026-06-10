import ReactDOM from 'react-dom/client'
import App from './App'
import UsuarioProvider from './context/UsuarioProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UsuarioProvider>
    <App />
  </UsuarioProvider>
)