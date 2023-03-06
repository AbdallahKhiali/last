const {
    createproduct,
    getproducts,
    getproductById,
    updateproduct,
    deleteproduct,

} = require('../controller/product')

const express = require('express')
const verifylogin = require('../config/jwt')
const { admin } = require('../config/roles')
const { uploadImages } = require('../config/upload')


const productrouter = express.Router()


productrouter.get('/all', getproducts)
productrouter.post('/add', verifylogin, admin, uploadImages.array('images', 5), createproduct)
productrouter.put('/:id', verifylogin, admin, uploadImages.array('images', 5), updateproduct)
productrouter.delete('/:id', verifylogin, admin, deleteproduct)
productrouter.get('/:id', getproductById)




module.exports = productrouter
