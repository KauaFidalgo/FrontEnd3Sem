const mongoose = require("mongoose")

const PostSchema =
new mongoose.Schema({

    nome: String,

    mensagem: String,

    foto: String,

    curtidas: {
        type: Number,
        default: 0
    },

    curtidoPor: {
        type: Array,
        default: []
    }

})

module.exports =
mongoose.model("Post", PostSchema)