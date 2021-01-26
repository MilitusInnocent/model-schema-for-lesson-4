var express = require('express');
var router = express.Router();

// Require post controller.
var orderController = require('../controllers/orderController');

// when users visit /post go to post controller
router.get('/', orderController.order_get);



module.exports = router;