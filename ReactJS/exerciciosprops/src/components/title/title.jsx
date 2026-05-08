import "./title.css"

function Title({texto, sobrenome, idade}) {
    return <h1>{texto} {sobrenome} | Idade : {idade}</h1>
}


export default Title