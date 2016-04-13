var express = require('express');
var router = express.Router();
var Post = require('../models/blog');


router.route('/')
	.get(function(req, res) {
	Post.find(function(err, post) {
		if(err) {
			res.status(500).send(err, 'Something broke!');
		} else {
			res.json(post)
		}
	});
})
.post(function(req, res, next){
	var post = new Post({
		title: req.body.title,
		content: req.body.content,
		img: req.body.img,
	})
	post.save(function(err, post){
		if(err){
			res.status(500).send(err, 'Something broke in post.save!');
			next();
		} else {
			res.json(post);
		}
	})
});

router.route('/:post_id')
	.get(function(req, res){
	Post.findById(req.params.post_id, function(err, post){
		if(err){
			res.status(500).send(err, 'Something broke!');
		} else {
			res.json(post);
		}
	})
});

module.exports = router;