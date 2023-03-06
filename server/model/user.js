const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstname: String,
    lastname: String,
    role: String,
    email: String,
    password: String,
    accountFor: String,
})
const userModel = mongoose.model('users', userSchema)

module.exports = userModel