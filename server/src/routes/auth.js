const { Router } = require('express')

const {
  getUsers,
  register,
  login,
  protectedd,
  logout,
  getPrueba
} = require('../controllers/auth')

const {
  validationMiddleware,
} = require('../middlewares/validations-middleware')

const { registerValidation, loginValidation } = require('../validators/auth')
// const { userAuth } = require('../middlewares/auth-middleware')
const { verifyToken } = require('../middlewares/verifyToken')

const router = Router()


router.get('/get-users', getUsers)
router.post('/prueba', getPrueba, verifyToken)
router.get('/protected', protectedd)
router.post('/register', registerValidation, validationMiddleware, register)
router.post('/login', loginValidation, validationMiddleware, login )
router.get('/logout', logout)

module.exports = router
