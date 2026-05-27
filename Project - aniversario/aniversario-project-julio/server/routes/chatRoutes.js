const express = require("express")

const router = express.Router()

const Chat =
require("../models/Chat")

// LISTAR
router.get("/", async (req, res) => {

    try {

        const mensagens =
        await Chat.find()

        res.json(mensagens)

    } catch(error){

        res.status(500).json(error)

    }

})

// ENVIAR
router.post("/", async (req, res) => {

    try {

        const novaMensagem =
        await Chat.create(req.body)

        res.status(201).json(
            novaMensagem
        )

    } catch(error){

        res.status(500).json(error)

    }

})

module.exports = router