import "./Subtitle.css";

function Subtitle(props) {
    return(
        <h2>
            {props.texto}
            {props.rawany}
        </h2>
    );
}

export default Subtitle;