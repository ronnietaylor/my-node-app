
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'sallybuffalo.com' });
};

/*
 * GET about page.
 */

exports.about = function(req, res){
  res.render('about', { title: 'sallybuffalo.com' });
};
