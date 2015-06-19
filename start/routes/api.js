var express = require('express');
var router = expresss.Router();


//Some Implementation
router.route('/posts');

	//
	.get()(function(req, res){
		//temp solution
			res.send({message: 'Todo return all posts'});
	})

	.post(function(req, res){
		res.send({message: 'Todo create a new post'});
	})

module.exports = router;