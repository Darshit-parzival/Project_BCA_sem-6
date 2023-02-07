const express = require('express');
const { userlogin, userregistration } = require('../controller/userAuth');
const { adminlogin } = require('../controller/adminAuth');
const router = express.Router();

router.post('/userregister', userregistration);

router.post('/userlogin', userlogin);

router.post('/adminlogin', adminlogin);

module.exports = router