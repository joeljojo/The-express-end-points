const express = require('express')
const router = express.Router()
const userControllers = require('../Controllers/userControllers')


router.get('/users', userControllers.getUsers)
router.get('/user/:id', userControllers.getSpecificUsers)
router.post('/users', userControllers.addUsers)
router.delete('/user/:id', userControllers.deleteUsers)
router.put('/user/:id', userControllers.updateUsers)


//Export the module
module.exports = router