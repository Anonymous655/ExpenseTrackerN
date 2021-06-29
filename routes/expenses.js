const express = require('express')
const { getExpenses, addExpense, deleteExpense } = require('../controller/expenses')
const auth = require('../middleware/auth')


const router = express.Router()

router.get('/getexpenses', auth, getExpenses)
router.post('/addexpense', auth, addExpense)
router.delete('/deleteexpense/:expenseid', auth, deleteExpense)

module.exports = router;