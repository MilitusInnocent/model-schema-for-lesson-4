/* GET user page. */
exports.productCategory_get = [
  function(req, res, next) {
  res.render('productCategory', { title: 'productCategories page' });
}
];
