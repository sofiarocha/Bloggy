var express = require('express');
var router = express.Router();
const { postsIndex, postShow, postNew, createPost } = require(__dirname + '/../controllers/posts');

/* GET home page. */
router.get('/', postsIndex);
router.get('/post/new', postNew);
router.post('/post/new', createPost);
router.get('/post/:id', postShow);


module.exports = router;
