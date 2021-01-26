/* GET index page. */
exports.customer_get = [
  function(req, res, next) {
  res.render('customer', { title: 'Welcome To The Customers Page' });
}
];
