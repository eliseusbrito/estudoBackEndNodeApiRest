const videos = require('../model/Video.js');

exports.getVideoById = async (id) => {
    //let res = {};
    /*
    videos.findById(id)
        .populate('titulo', 'descricao')
        .exec((err, videos) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - Id do video não localizado.` })
            } else {
                res.status(200).send(videos)
            }
        });
        */
    const res = await videos.findById(id).exec();
        
    return res;

}