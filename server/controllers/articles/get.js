const Article = require("../../models/article");

const getArticles = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  try {
    const articles = await Article.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Article.count();

    res.status(200).json({
      articles,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ error: "Error fetching paginated articles" });
  }
};

module.exports = getArticles;
