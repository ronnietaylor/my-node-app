
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Home' });
};

/*
 * GET about page.
 */

exports.about = function(req, res){
  res.render('about', { title: 'About' });
};

/*
 * GET chat page.
 */

exports.chat = function(req, res){
  res.render('chat', { title: 'Chat' });
};
