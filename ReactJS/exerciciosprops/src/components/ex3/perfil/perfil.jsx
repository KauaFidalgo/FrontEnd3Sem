import "./perfil.css"

function Perfil({nome, idade, profissao}) {
    return (
        <p>
            Nickname : {nome} |
            YearsOld : {idade} |
            Profissao : {profissao} 
        </p>
    )
}

export default Perfil