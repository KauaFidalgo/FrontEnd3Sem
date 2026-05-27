const express = require("express")

const router = express.Router()

const bcrypt = require("bcryptjs")

const jwt = require("jsonwebtoken")

const Convidado =
require("../models/Convidado")

// REGISTER
router.post(
"/register",
async (req, res) => {

    const {
        nome,
        idade,
        instagram,
        senha
    } = req.body

    const existe =
    await Convidado.findOne({
        nome
    })

    if(existe){

        return res.status(400).json({
            erro: "Usuário já existe"
        })

    }

    const senhaHash =
    await bcrypt.hash(senha, 10)

    const novo =
    await Convidado.create({

        nome,
        idade,
        instagram,

        senha: senhaHash

    })

    res.status(201).json(novo)

})

// LOGIN
router.post(
"/login",
async (req, res) => {

    const {
        nome,
        senha
    } = req.body

    const usuario =
    await Convidado.findOne({
        nome
    })

    if(!usuario){

        return res.status(400).json({
            erro: "Usuário não encontrado"
        })

    }

    const senhaCorreta =
    await bcrypt.compare(
        senha,
        usuario.senha
    )

    if(!senhaCorreta){

        return res.status(400).json({
            erro: "Senha inválida"
        })

    }

    const token =
    jwt.sign(

        {
            id: usuario._id
        },

        "segredo"

    )

    res.json({

        token,

        usuario

    })

})

module.exports = router