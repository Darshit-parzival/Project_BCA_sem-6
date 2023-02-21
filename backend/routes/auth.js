const express = require('express');
const { teamA } = require('../controller/hostAuth');
const { userlogin, userregistration } = require('../controller/userAuth');
const router = express.Router();

router.post('/userregister', userregistration);

router.post('/userlogin', userlogin);

router.post('/teamA',teamA);

module.exports = router