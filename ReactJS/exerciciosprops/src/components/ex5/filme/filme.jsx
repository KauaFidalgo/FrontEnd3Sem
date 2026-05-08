import './filme.css'

function Filme({titulo, ano, genero, nota}) {
    return(
    <div className='filme-container'>
        <a>
            Nome do Filme :{titulo} - 
            Ano Lançado : {ano} -
            Genero : {genero} - 
            Nota geral : {nota}   
        </a>
    </div>
    )
}


export default Filme