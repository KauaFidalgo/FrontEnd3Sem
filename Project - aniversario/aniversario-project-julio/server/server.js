const express = require("express")

const mongoose = require("mongoose")

const cors = require("cors")

require("dotenv").config()

const convidadoRoutes =
require("./routes/convidadoRoutes")

const musicaRoutes =
require("./routes/musicaRoutes")

const postRoutes =
require("./routes/postRoutes")

const chatRoutes =
require("./routes/chatRoutes")

const authRoutes =
require("./routes/authRoutes")

const app = express()

app.use(cors())

app.use(express.json())

mongoose.connect(process.env.MONGO_URI)

.then(() => {

    console.log("Mongo conectado 🔥")

})

.catch((err) => {

    console.log(err)

})

app.use(
    "/api/convidados",
    convidadoRoutes
)

app.use(
    "/api/musicas",
    musicaRoutes
)

app.use(
    "/api/posts",
    postRoutes
)

app.use(
    "/api/chat",
    chatRoutes
)

app.use(
    "/api/auth",
    authRoutes
)

app.use(
    "/uploads",
    express.static("uploads")
)

app.listen(process.env.PORT, () => {

    console.log(
        `Servidor rodando na porta ${process.env.PORT}`
    )

})