const express = require('express');
const { updatePassword, resetPassword, forgotPassword } = require('../controller/resetPassword');
const router = express.Router();




router.get('/updatepassword/:resetpasswordid', updatePassword)

router.get('/resetpassword/:id', resetPassword)

router.use('/forgotpassword', forgotPassword)

module.exports = router;