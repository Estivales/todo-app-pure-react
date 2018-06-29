const mongoose = require('mongoose')
mongoose.Premise = global.Premise //só para tirar mensagem de deprecated no promise do mongoose
module.exports = mongoose.connect('mongodb://localhost/todo')