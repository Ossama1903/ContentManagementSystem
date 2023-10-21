const Article = require("../../models/article");

const getArticleById = async (req, res) => {
  const articleId = req.params.id;

  try {
    const article = await Article.findById(articleId).exec();

    if (!article) {
      return res.status(404).json({ error: "Article not found" });
    }

    res.json(article);
  } catch (error) {
    res.status(500).json({ error: "Error fetching the article" });
  }
};

module.exports = getArticleById;
