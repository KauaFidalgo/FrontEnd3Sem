import "./FestaChat.css"

import { useEffect, useState } from "react"

//import io from "socket.io-client"

const API = "http://localhost:5000"

//const socket = io(API)

function FestaChat() {

    const [mensagem, setMensagem] = useState("")

    const [mensagens, setMensagens] = useState([])

    useEffect(() => {

        buscarMensagens()

        socket.on(
            "receberMensagem",
            (novaMensagem) => {

                setMensagens((prev) => [
                    ...prev,
                    novaMensagem
                ])

            }
        )

        return () => {

            //socket.off("receberMensagem")

        }

    }, [])

    async function buscarMensagens() {

        try {

            const resposta = await fetch(`${API}/api/chat`)

            const dados = await resposta.json()

            setMensagens(dados)

        } catch (error) {

            console.log(error)

        }

    }

    async function enviarMensagem(e) {
    e.preventDefault()

    if (!mensagem.trim()) return

    const usuario = JSON.parse(
        localStorage.getItem("usuarioFesta")
    )

    const novaMensagem = {
        nome: usuario.nome,
        mensagem
    }

    try {

        await fetch("http://localhost:5000/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novaMensagem)
        })

        buscarMensagens()

        setMensagem("")

    } catch(error) {
        console.log(error)
    }
}

    return (

        <div className="festa-chat">

            <h2>💬 Chat da Festa</h2>

            <div className="chat-box">

                {mensagens.map((msg, index) => (

                    <div
                        key={index}
                        className="chat-message"
                    >

                        <div className="chat-avatar">

                            {msg.usuario?.charAt(0)}

                        </div>

                        <div>

                            <strong>
                                {msg.usuario}
                            </strong>

                            <p>
                                {msg.mensagem}
                            </p>

                        </div>

                    </div>

                ))}

            </div>

            <form
                className="chat-form"
                onSubmit={enviarMensagem}
            >

                <input
                    type="text"
                    placeholder="Digite sua mensagem..."
                    value={mensagem}
                    onChange={(e) =>
                        setMensagem(e.target.value)
                    }
                />

                <button type="submit">
                    ENVIAR
                </button>

            </form>

        </div>

    )
}

export default FestaChat