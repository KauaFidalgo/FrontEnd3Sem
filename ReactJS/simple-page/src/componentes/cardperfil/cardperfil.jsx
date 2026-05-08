import logoPerfil from '../../assets/images.jpg';
import "./cardperfil.css";

function CardPerfil() {
    return (
        <div class="card-perfil">
            <img 
            class="card-perfil__image" 
            src={logoPerfil} 
            alt="imagem do usuário"
            />
        </div>
    )
}


export default CardPerfil