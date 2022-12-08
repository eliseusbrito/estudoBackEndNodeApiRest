const router = require('express').Router();
//import express from "express"
const videosController = require("../controller/videosController.js");
//import videosController from "../controller/videosController.js";
const indexController = require("../controller/indexController.js");
//import indexController from "../controller/indexController.js";

//const router = express.Router()

// const videosController = require('../controller/videosController');

router.get('/', indexController.getIndex);

router.get('/videos/:id', videosController.getVideoById);

module.exports = router;
//export default router;