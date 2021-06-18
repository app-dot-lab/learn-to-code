const express = require("express");
const jwt = require('jsonwebtoken')
const router = express.Router();

const User = require("../models/user");
const Post = require("../models/post");
const { request } = require("../app");

// routes

router.get("/posts", async (req, res) => {
    var posts = await Post.find().populate("author");
    res.send(posts);
});

router.get("/posts/:id", async (req, res) => {
    const postId = req.params.id;
    const post = await Post.findOne({ _id: postId }).populate("author");
    res.send(post);
});

router.post("/posts", async (req, res) => {

    const token = (req.headers.authorization).split(' ')[1]
    const user = jwt.verify(token, process.env.JWT_SECRET)

    console.log(req.body)
    const reqBody = req.body
    const title = reqBody.title;
    const body = reqBody.body;

    // TODO: Error handling
    const userObj = await User.findOne({ username: user.username });
    
    const newPost = Post({
        author: userObj,
        title,
        body,
    });
    newPost.save();

    res.send(newPost._id);
});

module.exports = router;
