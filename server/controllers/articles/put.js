const Article = require("../../models/article");

const putArticle = async (req, res) => {
  const articleId = req.params.id;
  const { title, content } = req.body;

  try {
    const article = await Article.findById(articleId);

    if (!article) {
      return res.status(404).json({ error: "Article not found" });
    }

    article.title = title;
    article.content = content;

    await article.save();

    res.json({ message: "Article updated successfully", article });
  } catch (error) {
    res.status(500).json({ error: "Update failed" });
  }
};

module.exports = putArticle;
