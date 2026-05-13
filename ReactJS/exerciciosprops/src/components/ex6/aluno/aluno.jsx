import './aluno.css'
import Hero from '../../../assets/hero.png'

function Aluno({nome, curso, hero}) {
    return (
        <div className="card-perfil">
            <img
                className="card-perfil__image"
                src={Hero}
                alt="imagem do usuário"
            />

            <p>
                {nome} - 
                {curso}
            </p>

        </div>
    )
}

export default Aluno