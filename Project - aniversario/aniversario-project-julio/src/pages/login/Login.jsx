import { useState } from "react"

import API from "../../services/api"

function Login() {

    const [nome, setNome] =
        useState("")

    const [senha, setSenha] =
        useState("")

    async function fazerLogin(e) {

        e.preventDefault()

        try {

            const resposta =
                await fetch(

                    `${API}/auth/login`,

                    {

                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        body: JSON.stringify({

                            nome,
                            senha

                        })

                    }

                )

            const dados =
                await resposta.json()

            if (!resposta.ok) {

                alert(dados.erro)

                return

            }

            localStorage.setItem(

                "token",

                dados.token

            )

            localStorage.setItem(

                "usuarioFesta",

                JSON.stringify(
                    dados.usuario
                )

            )

            alert("Login realizado 🔥")

            window.location.href = "/"

        } catch (error) {

            console.log(error)

        }

    }

    return (

        <form onSubmit={fazerLogin}>

            <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) =>
                    setNome(
                        e.target.value
                    )
                }
            />

            <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) =>
                    setSenha(
                        e.target.value
                    )
                }
            />

            <button type="submit">
                LOGIN
            </button>

        </form>

    )

}

export default Login