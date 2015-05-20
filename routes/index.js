var express = require('express');
var contactRouter = require('./contact');

var router = express.Router();

router.use('/contact', contactRouter);

module.exports = router;
