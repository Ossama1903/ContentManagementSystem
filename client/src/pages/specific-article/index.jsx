import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import getArticleById from "../../requestHandlers/articles/getArticleById";
import styles from "./specificArticle.module.css";
import deleteArticle from "../../requestHandlers/articles/deleteArticle";
import { useSnackbar } from "../../contexts/useSnackbar";
import { Button } from "@mui/material";
import updateArticle from "../../requestHandlers/articles/updateArticle";

const SpecificArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditModeOn, setIsEditModeOn] = useState(false);

  const { showSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const titleRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    getArticleById(id)
      .then((response) => {
        setArticle(response.data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
      });
  }, []);

  const handleDelete = () => {
    deleteArticle(id).then(() => {
      showSnackbar("Article has been successfully deleted.", "error");
      navigate("/");
    });
  };

  const handleUpdate = () => {
    updateArticle(id, titleRef.current.value, contentRef.current.value)
      .then(() => {
        showSnackbar("Article has successfully been updated", "success");
        setIsEditModeOn(false);
      })
      .catch((e) => {
        showSnackbar("An error occured while updating the article");
      });
  };

  return (
    <div className={styles.specificArticlePage}>
      <div className={styles.innerContainer}>
        {isLoading ? (
          <h1 style={{ textAlign: "center" }}>Loading...</h1>
        ) : (
          <>
            <input
              className={styles.title}
              disabled={!isEditModeOn}
              defaultValue={article?.title}
              ref={titleRef}
            />
            <br />
            <textarea
              className={`${styles.content} ${styles.widthFull}`}
              disabled={!isEditModeOn}
              defaultValue={article?.content}
              ref={contentRef}
            />
            <p>Status: {article?.status}</p>
            <p>Date created: {article?.createdAt.split("T")[0]}</p>
            <p>Last Updated: {article?.updatedAt.split("T")[0]}</p>
            <Button
              onClick={handleDelete}
              variant="contained"
              color="error"
              sx={{ marginRight: "0.5rem" }}
            >
              Delete
            </Button>
            {isEditModeOn && (
              <>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleUpdate}
                  sx={{ marginRight: "0.5rem" }}
                >
                  Confirm
                </Button>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => setIsEditModeOn(false)}
                >
                  Cancel
                </Button>
              </>
            )}
            {!isEditModeOn && (
              <Button
                variant="contained"
                color="info"
                onClick={() => setIsEditModeOn(true)}
              >
                Edit
              </Button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SpecificArticle;
