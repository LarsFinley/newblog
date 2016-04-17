var express = require('express');
var router = express.Router();
var Blog = require('../models/blog');
var Comment = require('../models/comments');

router.route('/')
	.post(function(req,res) {
		var auth = req.user ? req.user._id : null
		var blog = new Blog ({
			
			title: req.body.title,
			content: req.body.content,
			img: req.body.img,

		});
		console.log(blog);
		blog.save(function(err, blog) {
			if(err) {
				res.status(500).send(err, "Failed to Save");
			} else {
				res.json(blog)
			}
		})
	})

	.get(function(req, res) {
		Blog.find()
		.populate('author')
		.populate('comments')
		.exec(function(err, blog) {
			if(err) {
				console.log(err)
			} else {
				res.json(blog)
			}
		})
	});

router.route('/:blog_id')
	.get(function(req, res) {
		Blog.findById(req.params.blog_id)
			.populate({
				path: 'commentS',
				populate: {
					path: 'user',
					select: 'local.user'
				}
			})
			.exec(function(err, blog) {
				if (err) {
					console.log(err)
				}else {
					res.json(blog)
				}
			})
	})

	.put(function(req, res) {
		Blog.findById(req.params.blog_id, function(err, blog) {
			if(err) {
				console.log(err)
			} else {
				 blog.title = req.body.title ? req.body.title : blog.title;
	       blog.img = req.body.img ? req.body.img : blog.img;
	       blog.content = req.body.content ? req.body.content : blog.content;
         blog.author = req.body.author ? req.body.author : blog.author;
         blog.comments = req.body.comments ? req.body.comments : blog.comments;

         blog.save(function(err, newBlog) {
           if (err) {
             console.log(err)
           } else {
             res.json({ message: 'Blog updated!'});
           }
         })
       }
     })
   })

 .delete(function(req, res){
   Blog.remove({ _id: req.params.blog_id }, function (err, blog){
     if(err) {
       console.log(err);
     } else {
       res.json({ title: 'blog was deleted!' });
     }
   })
 });

 router.route('/:blog_id/comment')
  .get(function(req, res){
    Blog.findById(req.params.blog_id)
    .populate({
      path: 'comments',
      populate: {
        path: 'user',
        select: 'local.user',
      }
    })
    .exec(function(err, comments){
      if(err){
        res.status(500).send(err, "Something broke on getting comments");
      } else {
        res.json(comments);
      }
    })
  })
  .post(function(req, res){
    var comment = new Comment();
    comment.body = req.body.body ? req.body.body : comment.body;
    comment.user = req.user ? req.user._id : null;
    comment.blog = req.params.blog_id;

    console.log(comment.body);

    comment.save(function(err, com){
      if(err){
        res.send(err);
      } else {
        Blog.findById(req.params.blog_id, function(err, blog){
          if(err){
            res.send(err);
          } else {
            blog.comments.push(com._id);
            blog.save();
            res.json(com);
          }
        })
      }
    })
  });

router.route('/:blog_id/comment/:comments_id')
  .delete(function(req, res ){
    Comment.remove({_id: req.params.comments_id}, function(err, comment){
      if(err){
          console.log(err);
      } else {
        res.json({message: 'comment deleted'});
      }
    })
  });


 module.exports = router;














