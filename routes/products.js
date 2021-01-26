var express = require('express');
var router = express.Router();

// Require post controller.
var productController = require('../controllers/productController');

// when users visit /post go to post controller
router.get('/', productController.product_get);


module.exports = router;

