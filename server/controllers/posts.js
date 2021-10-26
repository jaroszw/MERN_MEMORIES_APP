import PostMessage from "../models/postsMessage.js";
import mongoose from "mongoose";

export const getPosts = async (req, res) => {
  try {
    const PostMessages = await PostMessage.find({});
    res.status(200).json(PostMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, message, creator, selectedFile, tags } = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);
    const updatedPost = {
      creator,
      title,
      message,
      tags,
      selectedFile,
      _id: id,
    };
    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  try {
    await PostMessage.findOneAndRemove(id);
    res.status(200).send({ message: "Post deleted successfully" });
  } catch (error) {
    console.log({ error: error });
    res.status(400).send({ error: error });
  }
};

export const likePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  try {
    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(
      id,
      {
        likeCount: post.likeCount + 1,
      },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(400).send({ error: error });
  }
};
