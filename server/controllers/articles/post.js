const Article = require("../../models/article");

const postArticles = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const newArticle = new Article({ title, content, author });
    await newArticle.save();
    res.json({ message: "Article created successfully", article: newArticle });
  } catch (error) {
    res.status(500).json({ error: "Article creation failed" });
    console.log(error);
  }
};

module.exports = postArticles;
