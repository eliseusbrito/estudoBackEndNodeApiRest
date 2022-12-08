//import mongoose from "mongoose"
const mongoose = require("mongoose");

const videosSchema = new mongoose.Schema(
    {
        id: { type: String },
        titulo: { type: String, required: true },
        descricao: { type: String },
        url: { type: String, required: true }
    }
)

const videos = mongoose.model("Videos", videosSchema)

//export default videos
module.exports = videos
