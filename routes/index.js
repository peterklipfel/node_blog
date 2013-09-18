
/*
 * GET home page.
 */
var ArticleProvider = require('../articleprovider-mongodb').ArticleProvider;
var articleProvider= new ArticleProvider('localhost', '27017');
exports.index = function(req, res){
  articleProvider.findAll(function(error, docs){
    res.render('index', {
    title: 'Blog',
    articles: docs})
    // res.send(docs);
  });
  // res.render('index', { title: 'Express' });
};