var express = require('express');
var router = express.Router();

// Require post controller.
var categoryController = require('../controllers/categoryController');

// when users visit /post go to post controller
router.get('/', categoryController.category_get);



module.exports = router;