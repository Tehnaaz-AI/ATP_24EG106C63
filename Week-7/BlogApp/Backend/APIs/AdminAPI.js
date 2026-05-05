import exp from "express";
import { UserModel } from "../models/UserModel.js";
import { ArticleModel } from "../models/ArticleModel.js";
import { verifyToken } from "../middleware/verifyToken.js";

export const adminApp = exp.Router();

// READ SINGLE ARTICLE (ADMIN SAFE)
adminApp.get("/article/:id", verifyToken("ADMIN"), async (req, res) => {
  try {
    const article = await ArticleModel
      .findById(req.params.id)
      .populate("author", "firstName lastName email")
      .populate("comments.user", "email");

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
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

adminApp.delete("/users/:id", verifyToken("ADMIN"), async (req, res) => {
    try {
      const userId = req.params.id;
  
      const deletedUser = await UserModel.findByIdAndDelete(userId);
  
      if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json({
        message: "User deleted successfully",
        payload: deletedUser,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error deleting user" });
    }
  });

  adminApp.delete("/articles/:id", verifyToken("ADMIN"), async (req, res) => {
    try {
      const articleId = req.params.id;
  
      const deletedArticle = await ArticleModel.findByIdAndDelete(articleId);
  
      if (!deletedArticle) {
        return res.status(404).json({ message: "Article not found" });
      }
  
      res.status(200).json({
        message: "Article deleted successfully",
        payload: deletedArticle,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error deleting article" });
    }
  });
  
  adminApp.delete("/authors/:id", verifyToken("ADMIN"), async (req, res) => {
    try {
      const authorId = req.params.id;
  
      const deletedAuthor = await UserModel.findByIdAndDelete(authorId);
  
      if (!deletedAuthor) {
        return res.status(404).json({ message: "Author not found" });
      }
  
      res.status(200).json({
        message: "Author deleted successfully",
        payload: deletedAuthor,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error deleting author" });
    }
  });

/* =========================================================
   GET ALL USERS
========================================================= */
adminApp.get("/users", verifyToken("ADMIN"), async (req, res) => {
  try {
    const users = await UserModel.find({ role: "USER" });

    res.status(200).json({
      message: "Users fetched successfully",
      payload: users,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error fetching users" });
  }
});

/* =========================================================
   GET ALL AUTHORS
========================================================= */
adminApp.get("/authors", verifyToken("ADMIN"), async (req, res) => {
  try {
    const authors = await UserModel.find({ role: "AUTHOR" });

    res.status(200).json({
      message: "Authors fetched successfully",
      payload: authors,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error fetching authors" });
  }
});

/* =========================================================
   GET ALL ARTICLES (ADMIN VIEW)
========================================================= */
adminApp.get("/articles", verifyToken("ADMIN"), async (req, res) => {
  try {
    const articles = await ArticleModel.find()
      .populate("author", "firstName lastName email role")
      .populate("comments.user", "email");

    res.status(200).json({
      message: "All articles fetched successfully",
      payload: articles,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error fetching articles" });
  }
});

/* =========================================================
   DELETE USER (OPTIONAL FEATURE)
========================================================= */
adminApp.delete("/users/:id", verifyToken("ADMIN"), async (req, res) => {
  try {
    const userId = req.params.id;

    await UserModel.findByIdAndDelete(userId);

    res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error deleting user" });
  }
});

/* =========================================================
   DELETE AUTHOR (OPTIONAL FEATURE)
========================================================= */
adminApp.delete("/authors/:id", verifyToken("ADMIN"), async (req, res) => {
  try {
    const authorId = req.params.id;

    await UserModel.findByIdAndDelete(authorId);

    res.status(200).json({
      message: "Author deleted successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error deleting author" });
  }
});