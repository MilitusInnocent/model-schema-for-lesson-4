var express = require('express');
var router = express.Router();

// Require post controller.
var customerController = require('../controllers/customerController');

// when users visit /post go to post controller
router.get('/', customerController.customer_get);



module.exports = router;