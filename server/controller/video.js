const videoModel = require('../model/video')


const getvideos = async (req, res) => {
    videoModel.find().then(data => res.json(data)).catch(err => console.log(err))
}

const getvideoById = (req, res) => {
    var id = req.params.id
    videoModel.findById(id).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })

}

const createvideo = async (req, res) => {

    const image = req.files[0]?.path
    const { title, link, videoFor } = req.body

    let video = new videoModel({
        title: title,
        videoFor: videoFor,
        link: link,
        image: image,
    })
    video.save().then(video => res.json({ message: 'video added successfully', video })).catch(err => res.json(err))

}

const updatevideo = (req, res) => {
    var id = req.params.id
    videoModel.findByIdAndUpdate(id, req.body).then(
        () => {
            res.status(200).json({
                message: 'video updated successfully!',
                res: res.body
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });

        }
    );
}

const deletevideo = (req, res) => {
    var id = req.params.id
    videoModel.findByIdAndDelete(id).then(data => res.json(data)).catch(err => res.json(err))
}

module.exports = {
    createvideo,
    getvideos,
    getvideoById,
    updatevideo,
    deletevideo,

}