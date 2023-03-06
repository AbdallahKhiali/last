const {
    createvideo,
    getvideos,
    getvideoById,
    updatevideo,
    deletevideo,

} = require('../controller/video')

const express = require('express')
const verifylogin = require('../config/jwt')
const { admin, viewer } = require('../config/roles')
const { uploadImages } = require('../config/upload')


const videorouter = express.Router()


videorouter.get('/all', verifylogin, viewer, getvideos)
videorouter.post('/add', verifylogin, admin, uploadImages.array('image', 1), createvideo)
videorouter.put('/:id', verifylogin, admin, updatevideo)
videorouter.delete('/:id', verifylogin, admin, deletevideo)
videorouter.get('/:id', verifylogin, viewer, getvideoById)




module.exports = videorouter
