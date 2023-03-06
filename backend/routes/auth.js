const express = require('express');
const { teamName, playerNameA, playerNameB } = require('../controller/hostAuth');
const { userlogin, userregistration } = require('../controller/userAuth');
const router = express.Router();

router.post('/userregister', userregistration);

router.post('/userlogin', userlogin);

router.post('/teamName', teamName);

router.post('/playerNameA', playerNameA)

router.post('/playerNameB',playerNameB)

module.exports = router