import "./botao.css"

function Botao({texto, cor}) {
    return (
    <>
        <h2>Este é o seu botão, aperte para exibir a mensagem: </h2>

        <button style={{backgroundColor: `${cor}`, color: "white", padding: "10px 20px", borderRadius: "5px", cursor: "pointer"}}>
            {texto}
        </button>
    </>
    )
}


export default Botao