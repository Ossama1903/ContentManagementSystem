import React, { useEffect, useState } from "react";
import getPaginateArticles from "../../requestHandlers/articles/getPaginatedArticles";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPaginateArticles()
      .then((response) => {
        setArticles(response.data.articles);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  });

  return (
    <div className={styles.homePage}>
      <div className={styles.innerContainer}>
        <Link
          to="/add-article"
          style={{ color: "white", textDecoration: "none" }}
        >
          <Button sx={{ width: "100%" }} variant="contained" color="success">
            Add article
          </Button>
        </Link>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : articles.length === 0 ? (
          <h1 style={{ textAlign: "center" }}>No articles to show</h1>
        ) : (
          articles.map((article) => (
            <div
              key={article._id}
              className={`${styles.widthFull} ${styles.post}`}
            >
              <h5 className={styles.title}>
                <Link to={`article/${article._id}`}>{article.title}</Link>
              </h5>
              <p>{article.content}</p>
              <p style={{ marginBottom: "-10px" }}>
                <span className={styles.indicator}>Status:</span>{" "}
                {article.status}
              </p>
              <p style={{ marginBottom: "-10px" }}>
                <span className={styles.indicator}>Date created:</span>{" "}
                {article.createdAt.split("T")[0]}
              </p>
              <p>
                <span className={styles.indicator}>Author ID:</span>{" "}
                {article.author}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
