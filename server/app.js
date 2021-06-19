var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var session = require("express-session");
var mongoose = require("mongoose");
var MongoStore = require("connect-mongo")(session);
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var GoogleStrategy = require("passport-google-auth").OAuth2Strategy;
var dotenv = require("dotenv")

var db = require("./utils/db");
var User = require("./models/user");
var indexRoutes = require("./routes/index");
var authRoutes = require("./routes/auth");
var ideRoutes = require("./routes/ide");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));

dotenv.config()
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
    cors({
        origin: "http://localhost:3000", // <-- location of the react app were connecting to
        credentials: true,
    })
);
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        store: new MongoStore({
            mongooseConnection: mongoose.connection,
        }),
    })
);

// Passport Configurations

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/", indexRoutes);
app.use("/", authRoutes);
app.use("/ide", ideRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    // res.locals.error = req.app.get("env") === "development" ? err : {};
    res.locals.error = err;
    console.log(err)

    res
        .status(err.status || 500)
        .send("error", err.message);
});

module.exports = app;
