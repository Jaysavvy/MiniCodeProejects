const mongoose = require('mongoose');


const todoSchema = new mongoose.Schema({
    task: String,
    body: String,
  });

  const todo = mongoose.model('Todo', todoSchema);

  module.exports = todo;
