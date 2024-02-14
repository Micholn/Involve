import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    message: String, 
    creator: String, 
    tags: [String],
    selectedFile: String, 
    like: {
        type: Number, 
        default
    }
})