const mongoose = require('mongoose')
const {Schema} = mongoose

const LiderSchema = new Schema({
     nombre: String,
     correo: String,
     contrasena: String
})

module.exports = mongoose.model('lider', LiderSchema)