const express = require('express');
const router = express.Router();
const {getTopicsAndMaterials } = require('../controllers/Controller.js');

router
    .route('/:semester/:chapter')
    .get(getTopicsAndMaterials) 

    

module.exports = router