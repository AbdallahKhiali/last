const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commandSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    age: String,
    height: String,
    weight: String,
    sickness: String,
    gender: String,
    maritalStatus: String,
    blood: String,
    sleepTime: String,
    wakeTime: String,
    job: String,
    timeSpentWorking: String,
    adresse: String,
    wilaya: String,
    commune: String,
    products: [],
    

})
const commandModel = mongoose.model('commands', commandSchema)

module.exports = commandModel