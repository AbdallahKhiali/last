const commandModel = require('../model/command')


const getcommands = async (req, res) => {
    commandModel.find().then(data => res.json(data)).catch(err => console.log(err))
}



const createcommand = async (req, res) => {
    const { products } = req.body
    // console.log(products)
    // console.log(req.body)
    const { lastName, firstName, phoneNumber, email, adresse, commune, wilaya, blood, weight, height, job, maritalStatus, sleepTime, wakeTime, age, gender } = req.body
        let command = new commandModel({
            lastName: lastName,
            firstName: firstName,
            phoneNumber: phoneNumber,
            email: email,
            adresse: adresse,
            commune: commune,
            wilaya: wilaya,
            maritalStatus: maritalStatus,
            job: job,
            wakeTime: wakeTime,
            sleepTime: sleepTime,
            blood: blood,
            gender: gender,
            age: age,
            weight: weight,
            height: height,
            products: [...products],
        })
        command.save().then(command => res.json({ message: 'command added successfully', command })).catch(err => res.json(err))

        // console.log(req.body)
    // console.log(products)

    // console.log({ _id, lastname, firstname, phoneNumber, email, products })



}

const deletecommand = (req, res) => {
    var id = req.params.id
    commandModel.findByIdAndDelete(id).then(data => res.json(data)).catch(err => res.json(err))
}


const getCommandById = (req, res) => {
    var id = req.params.id
    commandModel.findById(id).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })

}



module.exports = {
    createcommand,
    getcommands,
    deletecommand,
    getCommandById
}