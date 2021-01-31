const LiderCtrl = {}
const Lider = require('../models/Lider.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

LiderCtrl.crearLider = async(req,res) => {
     const {nombre, correo, contrasena} = req.body
     const NuevoLider = new Lider({
          nombre, correo, contrasena
     })
     const correolider = await Lider.findOne({correo: correo})
     if(correolider){
          res.json({
               mensaje: 'El correo ya existe'
          })
     } else {
          NuevoLider.contrasena = await bcrypt.hash(contrasena,10)
          const token = jwt.sign({_id: NuevoLider._id}, 'secreta')
          await NuevoLider.save()
          res.json({
               mensaje: 'Bienvenido',
               id: NuevoLider._id,
               nombre: NuevoLider.nombre,
               token
          })
     }

}

LiderCtrl.login = async(req,res) => {
     const {correo, contrasena} = req.body
     const lider = await Lider.findOne({correo: correo})
     if (!lider){
          return res.json({
               mensaje: 'Correo incorrecto'
          })
     }
     const match = await bcrypt.compare(contrasena, lider.contrasena)
     if(match){
          const token = jwt.sign({_id: lider._id}, 'secreta')
          res.json({
               mensaje: 'Bienvenido de nuevo',
               id: lider._id,
               nombre: lider.nombre,
               token
          })
     } else {
          res.json({
               mensaje: 'Constraseña incorrecta'
          })
     }
}

module.exports = LiderCtrl