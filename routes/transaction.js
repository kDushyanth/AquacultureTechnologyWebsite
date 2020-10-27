const express = require('express');
const router = express.Router();
const {getTransactions , addTransaction , deleteTransaction} = require('../controllers/transaction.js');
router
    .route('/:email')
    .get(getTransactions)
    .post(addTransaction)

router
    .route('/:email/:id')
    .delete(deleteTransaction)

module.exports = router
