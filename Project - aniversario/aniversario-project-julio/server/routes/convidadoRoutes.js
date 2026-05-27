const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {

    res.json([
        {
            nome: "kaua"
        }
    ])

})

module.exports = router