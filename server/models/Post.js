'use strict';
const serviceLocator = require('../libs/service_locator')
const mongoose = serviceLocator.get('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique:true,
    },
    body:{
        type: String,
        required:true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
})

module.exports = mongoose.model('Post',postSchema);