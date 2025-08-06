const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "The task's title is required"],
    minlength: [2, "The taks's title's length must be of at least 2 characters"]
  },
  description: {
    type: String,    
  }, 
  completed: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Task', taskSchema)