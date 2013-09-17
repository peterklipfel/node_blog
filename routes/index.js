
/*
 * GET home page.
 */
var ArticleProvider = require('../articleprovider-memory').ArticleProvider;
var articleProvider= new ArticleProvider();
exports.index = function(req, res){
  articleProvider.findAll(function(error, docs){
      res.send(docs);
  });
  // res.render('index', { title: 'Express' });
};