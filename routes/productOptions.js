var express = require('express');
var router = express.Router();

// Require post controller.
var productOptionController = require('../controllers/productOptionController');

// when users visit /post go to post controller
router.get('/', productOptionController.productOption_get);


module.exports = router;