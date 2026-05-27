const express = require("express")

const router = express.Router()

const Post =
require("../models/Post")

// LISTAR POSTS
router.get("/", async (req, res) => {

    try {

        const posts =
        await Post.find()

        res.json(posts)

    } catch(error){

        res.status(500).json(error)

    }

})

// CRIAR POST
router.post("/", async (req, res) => {

    try {

        const novoPost =
        await Post.create(req.body)

        res.status(201).json(
            novoPost
        )

    } catch(error){

        res.status(500).json(error)

    }

})

// CURTIR POST
router.patch("/:id", async (req, res) => {

    try {

        const atualizado =
        await Post.findByIdAndUpdate(

            req.params.id,

            req.body,

            { new: true }

        )

        res.json(atualizado)

    } catch(error){

        res.status(500).json(error)

    }

})

module.exports = router