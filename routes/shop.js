const express = require('express');

const router = express.Router();

router.use('/', (req, res, next)=> {
    console.log("oga mario");
    res.send('<h1>Helloo from the FAKEst default side</h1>');
});

module.exports = router;