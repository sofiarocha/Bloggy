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

const postEdit = (req, res, next) => {
    Post.findById(req.params.id, (err, editedPost) => {
        if(err) {
            res.sendStatus(500, err);
        }
        res.render('edit-post', editedPost);
    });
}

const postSave = (req, res, next) => {
    Post.findById(req.params.id, (err, foundPost) => {
        foundPost.title = req.body.title;
        foundPost.content = req.body.content;

        foundPost.save((err,savedPost) => {
            if(err) {
                res.sendStatus(500, err);
            }
            res.redirect(`/post/${savedPost._id}`);
            console.log("Post updated");
        });
    });
}


module.exports = { postsIndex, postShow, postNew, createPost, postEdit, postSave }