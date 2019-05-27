const express = require('express');
const Post = require(__dirname + '/../models/Post');

const postsIndex = (req, res, next) => {
    Post.find({}, (err, foundPosts) => {
        if(err) {
            res.sendStatus(500, err);
        }
        res.render('index', { posts: foundPosts });
    })
}

const postShow = (req, res, next) => {
    Post.findById(req.params.id, (err, foundPost) => {
        if(err) {
            res.sendStatus(500, err);
        }
        res.render('post', foundPost);
    });
};

const postNew = (req, res, next) => {
    res.render('new-post', { title: 'New Post' });
};

const createPost = (req, res, next) => {
    console.log(req.body);
    const newPost = new Post({
        title: req.body.title,
        content: req.body.content,
    });

    newPost.save((err, savedPost) => {
        if(err) {
            res.sendStatus(500, err);
        }
        res.redirect(`/post/${savedPost._id}`);
        console.log(savedPost);
    });

};


module.exports = { postsIndex, postShow, postNew, createPost }