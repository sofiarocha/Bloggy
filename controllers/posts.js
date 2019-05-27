const express = require('express');

const postsIndex = (req, res, next) => {
    res.render('index', { title: 'Express', name: 'Pineapple' });
}

const postShow = (req, res, next) => {
    res.render('post', { title: 'Post', name: 'bananas' });
};

const postNew = (req, res, next) => {
    res.render('new-post', { title: 'New Post' });
};

const createPost = (req, res, next) => {
    console.log(req.body);
};


module.exports = { postsIndex, postShow, postNew, createPost }