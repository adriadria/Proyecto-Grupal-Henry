const {Router} = require('express');
const { createUser } = require('../controllers/videogame.controller');

const router = Router();

router.post('/user/add', createUser);

module.exports = router;