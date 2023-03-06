const productModel = require('../model/product')



const getproducts = async (req, res) => {
    productModel.find().then(data => res.json(data)).catch(err => console.log(err))
}

const getproductById = (req, res) => {
    var id = req.params.id
    productModel.findById(id).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })

}

const createproduct = async (req, res) => {

    const images = req.files.map(file => file.path);

    const { name, price, instock, type, description, size, colors } = req.body
    let product = new productModel({
        name: name,
        price: price,
        instock: instock,
        type: type,
        description: description,
        size: size,
        colors: colors,
        images: images
    })
    product.save().then(product => res.json({ message: 'product added successfully', product })).catch(err => res.json(err))

}





const updateproduct = (req, res) => {
    var id = req.params.id
    const images = req.files.map(file => file.path);

    productModel.findByIdAndUpdate(id, { ...req.body, images: images }, { new: true },).then(
        () => {
            res.status(201).json({
                message: 'product updated successfully!',
                data: { ...req.body, images }
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
            console.log(error)
        }
    );
}

const deleteproduct = (req, res) => {
    var id = req.params.id
    productModel.findByIdAndDelete(id).then(data => res.json(data)).catch(err => res.json(err))
}


module.exports = {
    createproduct,
    getproducts,
    getproductById,
    updateproduct,
    deleteproduct,

}