const service = require('../service/videosService.js');
//import service from "../service/videosService"


exports.getVideoById = async (req, res) => {
    const { id } = req.params;
    service.getVideoById(id)
        .then((result) => res.status(result.statusCode || 200).json(result))
        .catch((err) => res.status(err.statusCode || 500).send(err));
};

//export default service;
