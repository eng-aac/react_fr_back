const {Router} = require('express')
const router = Router()
const MiembroCtrl = require('../controllers/miembro.controllers')
const Auth = require('../helpers/auth')

router.post('/crear', Auth.verificarToken,  MiembroCtrl.crear)
router.get('/listarmiembros', Auth.verificarToken, MiembroCtrl.listar)
router.get('/listar/:id', Auth.verificarToken, MiembroCtrl.listarid)
router.get('/listarmiembroslider/:id', Auth.verificarToken, MiembroCtrl.miembrosDeUnLider)
router.delete('/eliminar/:id', Auth.verificarToken, MiembroCtrl.eliminar)
router.put('/actualizar/:id', Auth.verificarToken, MiembroCtrl.actualizar)
router.get('/buscar/:nombres', Auth.verificarToken, MiembroCtrl.buscarMiembro)

module.exports = router