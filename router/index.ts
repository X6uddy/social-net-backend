const Router = require('express').Router;
const {body} = require('express-validator');
const UserController = require('../controllers/user-controller');
// const authMiddleware = require('../middlewares/auth-middleware');

const router = new Router();

// router.post('/registration', 
//             body('email').isEmail(),
//             body('password').isLength({min: 3, max: 20}),
//             UserController.registration);
router.get('/login', UserController.login);
router.post('/register', UserController.login);
// router.post('/logout', UserController.logout);
// router.get('/activate/:link', UserController.activate);
// router.get('/refresh', UserController.refresh);
// router.get('/users', authMiddleware, UserController.users);

module.exports = router;