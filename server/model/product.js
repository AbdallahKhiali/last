const mongoose = require('mongoose')
const Schema = mongoose.Schema


const productSchema = new Schema({
    // picture: String,
    name: String,
    price: Number,
    instock: Boolean,
    type: String,
    description: String,
    images: [],
    size: [],
    colors: [],
})
const productModel = mongoose.model('products', productSchema)

module.exports = productModel