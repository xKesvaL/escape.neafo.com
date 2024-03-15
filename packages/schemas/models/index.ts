import { Schema, model } from "mongoose";

const PostSchema = new Schema({
	test: String,
});

const Post = model("Post", PostSchema);
