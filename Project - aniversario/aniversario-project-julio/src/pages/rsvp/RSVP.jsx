import Header from "../../components/header/Header"
import { useState } from "react"
import API from "../../services/api"

function RSVP() {

  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [instagram, setInstagram] = useState("")
  const [senha, setSenha] = useState("")

  async function confirmarPresenca(e) {

    e.preventDefault()

    if (!instagram.startsWith("@")) {
      alert("Digite um @ válido")
      return
    }

    const convidado = {
      nome,
      idade,
      instagram
    }

    try {

      const registerRes = await fetch(`${API}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, idade, instagram, senha }),
      })

      if (registerRes.ok) {
        const convidadoRes = await fetch(`${API}/convidados`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(convidado),
        })

        if (convidadoRes.ok) {
          localStorage.setItem("usuarioFesta", JSON.stringify(convidado))
          alert("Cadastro realizado 🔥")
          window.location.href = "/"
        } else {
          const data = await convidadoRes.json().catch(() => null)
          alert(data?.message || "Erro ao cadastrar convidado")
        }

      } else {
        const data = await registerRes.json().catch(() => null)
        alert(data?.message || "Erro no registro")
      }

    } catch (error) {
      console.log(error)
      alert("Erro de rede. Tente novamente mais tarde.")
    }
  }


  return (
    <>
      <Header />

      <section className="page">

        <h1>CADASTRO</h1>

        <div className="rsvp-container">

          <form
            className="rsvp-form"
            onSubmit={confirmarPresenca}
          >

            <h2>Confirmar Presença</h2>

            <input
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <input
              type="number"
              placeholder="Sua idade"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
            />

            <input
              type="text"
              placeholder="@instagram"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
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
              Entrar na Lista
            </button>

          </form>

        </div>

      </section>
    </>
  )
}

export default RSVP