/* GET index page. */
exports.productOption_get = [
  function(req, res, next) {
  res.render('productOption', { title: 'productOption Page' });
}
];