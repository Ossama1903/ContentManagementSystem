const express = require("express");
const router = express.Router();

const getArticles = require("../controllers/articles/get");
const postArticles = require("../controllers/articles/post");
const deleteArticle = require("../controllers/articles/delete");
const putArticle = require("../controllers/articles/put");
const getArticleById = require("../controllers/articles/get-by-id");
const verifyToken = require("../middlewares/verifyToken");

router.get("/", verifyToken, getArticles);
router.get("/:id", verifyToken, getArticleById);
router.post("/", verifyToken, postArticles);
router.put("/:id", verifyToken, putArticle);
router.delete("/:id", verifyToken, deleteArticle);


module.exports = router;



module.exports = router;
