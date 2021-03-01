const express = require("express");
const router = express.Router();

const User = require("../models/user");
const Post = require("../models/post");

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
    // Post datas
    console.log(req.user)
    const username = req.user.username;
    const title = req.body.title;
    const body = req.body.body;

    const user = await User.findOne({ username });

    // Creating new Post
    const newPost = Post({
        author: user,
        title,
        body,
    });
    newPost.save();

    res.send(newPost._id);
});

module.exports = router;
