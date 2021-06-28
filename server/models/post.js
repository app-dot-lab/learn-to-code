const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
});

module.exports = mongoose.model("Post", postSchema);
