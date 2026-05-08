import './jogo.css'
import Hero from '../../../assets/hero.png'

export default function Jogos({nickname, plataforma, preco, imagem}) {
    return(
        <>
            <div className="card-perfil">
                        <img
                            className="card-perfil__image"
                            src={Hero}
                            alt="imagem do usuário"
                        />
            
                        <p>
                            {nickname} 
                            {plataforma} -
                            {preco}
                        </p>
            
            </div>
        </>
    )
}