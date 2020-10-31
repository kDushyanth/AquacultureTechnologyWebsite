const express = require('express');
const router = express.Router();
const {getTopicsAndMaterials , pushFiles} = require('../controllers/Controller.js');

router
    .route('/:semester/:chapter')
    .get(getTopicsAndMaterials) 
    .put(pushFiles)
    

module.exports = router