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

exports.show_post = function(req, res) {
  articleProvider.findById(req.params.id, function(error, article) {
    res.render('blog_show.jade',
    {
      title: article.title,
      article:article
    });
  });
}

exports.new_comment = function(req, res) {
  articleProvider.addCommentToArticle(req.param('_id'), {
    person: req.param('person'),
    comment: req.param('comment'),
    created_at: new Date()
   } , function( error, docs) {
     res.redirect('/blog/' + req.param('_id'))
   });
}
