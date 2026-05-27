const mongoose = require("mongoose")

const ConvidadoSchema = new mongoose.Schema({

    nome: {
        type: String,
        required: true
    },

    idade: String,

    instagram: String,

    senha: {
    type: String,
    required: true
}

})

module.exports = mongoose.model(
    "Convidado",
    ConvidadoSchema
)