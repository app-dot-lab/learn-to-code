const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

router.get("/user", (req, res) => {
    res.send(req.user);
});

router.post("/login", passport.authenticate("local"), (req, res) => {
    const token = jwt.sign({ username: req.user.username }, process.env.JWT_SECRET);
    console.log(req.user)
    res.send({
        auth: true,
        user: {
            token,
            email: req.user.email,
            username: req.user.username
        },
        message: "User authenticated",
    });
});

router.post("/signup", async (req, res, next) => {
    if (req.body.password1 !== req.body.password2) {
        // throw
    }
    const user = new User({
        email: req.body.email,
        username: req.body.username,
    });
    try {
        const newUser = await User.register(user, req.body.password1);
        req.login(newUser, (err) => {
            if (err) return next(err);
            const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET);
            res.send({
                auth: true,
                token: token,
                message: "User authenticated",
            });
        });
    } catch (err) {
        res.send(err);
    }
});

router.get("/logout", (req, res) => {
    req.logout();
    res.status(200);
});

module.exports = router;
