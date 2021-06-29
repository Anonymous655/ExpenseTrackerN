const express = require('express');
const { buyPremium, updateTransactionStatus } = require('../controller/purchases');


const router = express.Router()


router.get('/premiummembership', auth, buyPremium)
router.post('/updatetransactionstatus', auth, updateTransactionStatus)

module.exports = router;