const mongoose = require("mongoose")

const MusicaSchema =
new mongoose.Schema({

    musica: {
        type: String,
        required: true
    },

    artista: {
        type: String,
        required: true
    },

    link: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model(
    "Musica",
    MusicaSchema
)