const mongoose = require('mongoose')
const Schema = mongoose.Schema


const videoSchema = new Schema({
    title: String,
    image: String,
    link: String,
    videoFor: String,
})
const videoModel = mongoose.model('videos', videoSchema)

module.exports = videoModel