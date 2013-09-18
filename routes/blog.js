/*
 * GET new post
 */

var ArticleProvider = require('../articleprovider-mongodb.js').ArticleProvider;
var articleProvider = new ArticleProvider('localhost', '27017');

exports.get_new = function(req, res){
  res.render('blog_new.jade', { locals: {
      title: 'New Post'
    }
  });
}

exports.post_new = function (req, res) {
  articleProvider.save({
    title: req.param('title'),
    body: req.param('body')
  }, function( error, docs) {
    res.redirect('/')
  });
}
