/* GET index page. */
exports.product_get = [
  function(req, res, next) {
  res.render('product', { title: 'Products Page' });
}
];
