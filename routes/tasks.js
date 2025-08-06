const express = require('express')
const router = express.Router()
const taskControllers = require('../controllers/taskControllers')

// router.get('/', taskControllers.getAllTasks)
// router.get('/:id', taskControllers.getOneTask)
router.post('/', taskControllers.createTask)
// router.put('/:id', taskControllers.udpateTask)
// router.delete('/:id', taskControllers.deleteTask)

module.exports = router