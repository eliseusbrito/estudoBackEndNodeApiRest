//import mongoose from "mongoose";
const mongoose = require("mongoose");

//mongoose.connect("mongodb://localhost:27017/videosdb", () => console.log("MongoDB conectado"));
mongoose.connect("mongodb://localhost/videosdb");
/*
mongoose.connect("mongodb://localhost/videosdb").then(() => {
    console.log("Mongo conectado....")
}).catch((err) => {
    console.log("Houve um erro ao conectar " + err)
});
*/
let db = mongoose.connection;

//export default db;
module.exports = db;