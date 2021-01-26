var express = require('express');
var router = express.Router();

// Require post controller.
var productCategoryController = require('../controllers/productCategoryController');

// when users visit /post go to post controller
router.get('/', productCategoryController.productCategory_get);



module.exports = router;