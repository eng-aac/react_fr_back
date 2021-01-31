const mongoose = require('mongoose')
const {Schema} = mongoose

const MiembroSchema = new Schema({
     nombres: String,
     apellidos: String,
     identificacion: String,
     puesto: String,
     tipo_contrato: String,
     lider: String
})

module.exports = mongoose.model('miembro', MiembroSchema)