import './contato.css'

function Contato({nome, telefone, email}) {
    return(
    <div className='container'>   
        <p>
             Nome Ctt: {nome} - 
             Tell: {telefone} -  
             E-mail: {email}
        </p>
    </div> 
    )
}


export default Contato