import Header from "../../components/header/Header"
import { useEffect, useState } from "react"

import API from "../../services/api"

function Playlist() {

    const [musica, setMusica] = useState("")
    const [artista, setArtista] = useState("")
    const [link, setLink] = useState("")

    const [lista, setLista] = useState([])

    useEffect(() => {

        buscarMusicas()

    }, [])

    async function buscarMusicas() {

        const resposta = await fetch(
            `${API}/musicas`
        )

        const dados = await resposta.json()

        setLista(dados)

    }

    async function pedirMusica(e) {

        e.preventDefault()

        const usuario = JSON.parse(
            localStorage.getItem("usuarioFesta")
        )

        const novaMusica = {

            musica,
            artista,
            link,

            usuario: usuario.nome

        }

        await fetch(`${API}/musicas`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novaMusica)
        })

        setMusica("")
        setArtista("")
        setLink("")

        buscarMusicas()

    }

    return (
        <>
            <Header />

            <section className="page">

                <h1>PLAYLIST</h1>

                <form
                    className="playlist-form"
                    onSubmit={pedirMusica}
                >

                    <input
                        type="text"
                        placeholder="Nome da música"
                        value={musica}
                        onChange={(e) =>
                            setMusica(
                                e.target.value
                            )
                        }
                    />

                    <input
                        type="text"
                        placeholder="Artista"
                        value={artista}
                        onChange={(e) =>
                            setArtista(
                                e.target.value
                            )
                        }
                    />

                    <input
                        type="text"
                        placeholder="Link Youtube/Spotify"
                        value={link}
                        onChange={(e) =>
                            setLink(
                                e.target.value
                            )
                        }
                    />

                    <button type="submit">
                        Enviar Música
                    </button>

                </form>

                <div className="playlist-grid">

                    {lista.map((item) => (

                        <div
                            key={item._id}
                            className="playlist-card"
                        >

                            <h2>
                                {item.musica}
                            </h2>

                            <p>
                                {item.artista}
                            </p>

                            <span>
                                enviado por{" "}
                                {item.usuario}
                            </span>

                        </div>

                    ))}

                </div>

            </section>
        </>
    )
}

export default Playlist