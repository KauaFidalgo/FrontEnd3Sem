import "./mychildren.css"

function MyChildren(props) {
    return(
        <div className="container">{props.children}</div>
    )
}

export default MyChildren