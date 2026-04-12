import exp from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { ArticleModel } from "../models/ArticleModel.js";
export const userApp = exp.Router();

//Read articles of all authors
userApp.get("/articles", verifyToken("USER"), async (req, res) => {
  //read articles
  const articlesList = await ArticleModel.find({ isArticleActive: true });
  //send res
  res.status(200).json({ message: "articles", payload: articlesList });
});

userApp.get("/article/:id", verifyToken("USER"), async (req, res) => {
  try {
    const article = await ArticleModel
      .findOne({ _id: req.params.id, isArticleActive: true })
      .populate("author", "firstName lastName email")
      .populate("comments.user", "email");

    if (!article) {
      return res.status(404).json({ message: "Article not found or inactive" });
    }

    res.status(200).json({
      message: "Article fetched",
      payload: article
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
});

//Add comment to an article
userApp.put("/articles", verifyToken("USER"), async (req, res) => {
  //get body from req
  const { articleId, comment } = req.body;
  //check article
  const articleDocument = await ArticleModel
                          .findOne({ _id: articleId, isArticleActive: true })
                           .populate("comments.user");

  console.log(articleDocument);
  //if article not found
  if (!articleDocument) {
    return res.status(404).json({ message: "Article not found" });
  }
  //get user id
  const userId = req.user?.id;
  //add comment to comments array of articleDocument
  articleDocument.comments.push({ user: userId, comment: comment });
  //save
  await articleDocument.save();
  //send res
  res.status(200).json({ message: "Comment added successfully", payload: articleDocument });
});