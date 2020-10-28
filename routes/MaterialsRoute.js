const express = require('express');
const router = express.Router();
const {getTopicsAndMaterials } = require('../controllers/Controller.js');

router
    .route('/:chapter')
    .get(getTopicsAndMaterials) // to be added 

    

module.exports = router