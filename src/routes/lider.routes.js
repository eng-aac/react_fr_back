const {Router} = require('express')
const router = Router()
const LiderCtrl = require('../controllers/lider.controllers')

router.post('/crear', LiderCtrl.crearLider)
router.post('/login', LiderCtrl.login)

module.exports = router