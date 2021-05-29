const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({

    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},{timestamps:true})

const Post = mongoose.model('Post',postSchema)
module.exports = Post