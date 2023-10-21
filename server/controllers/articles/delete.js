const Article = require("../../models/article");

const deleteArticle = async (req, res) => {
  const articleId = req.params.id;

  try {
    const article = await Article.findById(articleId);

    if (!article) {
      return res.status(404).json({ error: "Article not found" });
    }
    await Article.deleteOne({ _id: articleId });
    res.json({ message: "Article deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Deletion failed" });
    console.log(error);
  }
};

module.exports = deleteArticle;
