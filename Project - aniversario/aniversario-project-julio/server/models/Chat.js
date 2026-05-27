const mongoose = require("mongoose")

const ChatSchema =
new mongoose.Schema({

    nome: String,

    mensagem: String,

    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports =
mongoose.model("Chat", ChatSchema)