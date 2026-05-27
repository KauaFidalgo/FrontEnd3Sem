import "./FestaPlayer.css"

import { useEffect, useState } from "react"

function FestaPlayer() {

    const [musicas, setMusicas] = useState([])

    const [musicaAtual, setMusicaAtual] = useState("")

    useEffect(() => {

        buscarMusicas()

    }, [])

    async function buscarMusicas() {

        try {

            const resposta = await fetch(`${API}/musicas`)

            const dados = await resposta.json()

            setMusicas(dados)

        } catch (error) {

            console.log(error)

        }

    }

    function pegarVideoId(link) {

        if (!link) return null

        // youtube normal
        if (link.includes("watch?v=")) {

            return link.split("watch?v=")[1]
                .split("&")[0]

        }

        // youtu.be
        if (link.includes("youtu.be/")) {

            return link.split("youtu.be/")[1]
                .split("?")[0]

        }

        return null
    }

    function tocar(link) {

        // YOUTUBE
        if (
            link.includes("youtube.com")
            ||
            link.includes("youtu.be")
        ) {

            const videoId = pegarVideoId(link)

            if (!videoId) {

                alert("Link inválido")

                return
            }

            const embed =
                `https://www.youtube.com/embed/${videoId}?autoplay=1`

            setMusicaAtual(embed)

            return
        }

        // SPOTIFY
        if (link.includes("spotify.com")) {

            const partes = link.split("/")

            const tipo = partes[3]

            const id = partes[4].split("?")[0]

            const embed =
                `https://open.spotify.com/embed/${tipo}/${id}`

            setMusicaAtual(embed)

            return
        }

        alert("Link não suportado")
    }

    return (

        <div className="festa-player">

            <h2>🎵 Playlist da Festa</h2>

            <div className="player-area">

                {musicaAtual ? (

                    <iframe
                        key={musicaAtual}
                        className="youtube-player"
                        src={musicaAtual}
                        title="player"

                        allow="
    autoplay;
    clipboard-write;
    encrypted-media;
    fullscreen;
    picture-in-picture"

                        loading="lazy"

                        allowFullScreen
                    />

                ) : (

                    <div className="sem-musica">

                        <h3>
                            Escolha uma música 🔥
                        </h3>

                    </div>

                )}

            </div>

            <div className="musicas-lista">

                {musicas.map((item) => (

                    <div
                        key={item.id}
                        className="musica-card"
                    >

                        <div>

                            <h3>{item.musica}</h3>

                            <p>{item.artista}</p>

                        </div>

                        <button
                            onClick={() =>
                                tocar(item.link)
                            }
                        >
                            ▶ TOCAR
                        </button>

                    </div>

                ))}

            </div>

        </div>

    )
}

export default FestaPlayer