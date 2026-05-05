import exp from 'express'
import { UserModel } from '../models/UserModel.js'
import { ArticleModel } from '../models/ArticleModel.js'
import { verifyToken } from '../middleware/verifyToken.js'

export const authorApp = exp.Router()

//write article (protected route)
authorApp.post("/article", verifyToken("AUTHOR"), async (req, res) => {
    const articleObj = req.body;
    const user = req.user;

    // FORCE AUTHOR FROM TOKEN (NOT CLIENT)
    articleObj.author = user.id;

    const articleDoc = new ArticleModel(articleObj);
    await articleDoc.save();

    res.status(201).json({ message: "Article published Successfully" });
});

authorApp.get("/article/:id", verifyToken("AUTHOR"), async (req, res) => {
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


//read own article
authorApp.get("/articles", verifyToken("AUTHOR"), async (req, res) => {

    //read article by author id
    const idOfToken = req.user?.id

    //get articles by author id
    const articlesList = await ArticleModel.find({ author: idOfToken })

    //send res
    res.status(200).json({ message: "Articles", payload: articlesList })
})


//edit article
authorApp.put("/articles", verifyToken("AUTHOR"), async (req, res) => {

    const authorIdOfToken = req.user?.id

    //get modified article from client
    const { articleId, title, category, content } = req.body

    const modifiedArticle = await ArticleModel.findOneAndUpdate(
        { _id: articleId, author: authorIdOfToken },
        { $set: { title, category, content } },
        { new: true }
    )

    if (!modifiedArticle)
        return res.status(403).json({ message: "You are not authorized to edit the article" })

    res.status(200).json({ message: "Article Modified", payload: modifiedArticle })
})


//delete article (soft delete)
authorApp.patch("/articles", verifyToken("AUTHOR"), async (req, res) => {

    //get author id from decoded Token
    const authorIdOfToken = req.user?.id

    //get modified article from client
    const { articleId, isArticleActive } = req.body

    //get article by id
    const articleOfDB = await ArticleModel.findOne({
        _id: articleId,
        author: authorIdOfToken
    })

    //check status
    if (isArticleActive === articleOfDB.isArticleActive)
        return res.status(200).json({ message: "Article already in the same state" })

    articleOfDB.isArticleActive = isArticleActive
    await articleOfDB.save()

    //send res
    res.status(200).json({ message: "Article Modified" })
})