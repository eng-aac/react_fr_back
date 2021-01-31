const MiembroCtrl = {}
const Miembro = require('../models/Miembro.model')

MiembroCtrl.crear = async(req, res) => {
     const {nombres, apellidos, identificacion, puesto, tipo_contrato, lider} = req.body
     const NuevoMiembro = new Miembro({
          nombres, apellidos, identificacion, puesto, tipo_contrato, lider
     })
     
     const respuesta = await NuevoMiembro.save()
     res.json({
          mensaje: 'Miembro creado',
          respuesta
     })
}

MiembroCtrl.listar = async(req, res) => {
     const respuesta = await Miembro.find()
     res.json(respuesta)
}

MiembroCtrl.listarid = async(req, res) => {
     const id = req.params.id
     const respuesta = await Miembro.findById({_id: id})
     res.json(respuesta)
}

MiembroCtrl.miembrosDeUnLider = async(req, res) => {
     const id = req.params.id
     const respuesta = await Miembro.find({lider: id})
     res.json(respuesta)
}

MiembroCtrl.eliminar = async(req, res) => {
     const id = req.params.id
     await Miembro.findByIdAndRemove({_id: id})
     res.json({
          mensaje: 'Miembro eliminado'
     })
}

MiembroCtrl.actualizar = async(req, res) => {
     const id = req.params.id
     await Miembro.findByIdAndUpdate({_id: id}, req.body)
     res.json({
          mensaje: 'Miembro actualizado correctamente'
     })
}


MiembroCtrl.buscarMiembro = async(req, res) => {
     const nombres = req.params.nombres
     const respuesta = await Miembro.find({nombres: {$regex: ".*" + nombres + ".*"}})
     res.json(respuesta)
}

module.exports = MiembroCtrl