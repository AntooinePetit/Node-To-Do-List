const Task = require('../models/tasks')

exports.createTask = async (req, res) => {
  const { title, description } = req.body

  const task = new Task({
    title,
    description
  })

  try {
    const newTask = await task.save()
    res.status(201).json(newTask)
  } catch(err) {
    res.status(400).json({message: err.message})
  }
}