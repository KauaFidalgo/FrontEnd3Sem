const express = require("express")

const router = express.Router()

const Musica =
require("../models/Musica")

router.get("/", async (req, res) => {

    try {

        const musicas =
        await Musica.find()

        res.json(musicas)

    } catch(error){

        res.status(500).json(error)

    }

})

router.post("/", async (req, res) => {

    try {

        const novaMusica =
        await Musica.create(req.body)

        res.status(201).json(
            novaMusica
        )

    } catch(error){

        res.status(500).json(error)

    }

})

module.exports = router