import React, { useState } from "react";
import addArticle from "../../requestHandlers/articles/addArticle";
import styles from "./addArticle.module.css";
import Textarea from "@mui/joy/Textarea";
import { Button, TextField } from "@mui/material";
import { useSnackbar } from "../../contexts/useSnackbar";
import { Link, useNavigate } from "react-router-dom";

const AddArticle = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { showSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleClick = (e) => {
    if (title === "" || content === "") {
      showSnackbar("Please fill in all the fields", "error");
    }
    addArticle(title, content, "6533ad74a70893ac1208bf6c")
      .then((response) => {
        showSnackbar("Article has been added");
        navigate("/");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className={styles.addArticlePage}>
      <div className={styles.innerContainer}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <Button sx={{ width: "100%" }} variant="contained" color="success">
            HOME
          </Button>
        </Link>
        <TextField
          required
          label="Title"
          variant="standard"
          className={styles.widthFull}
          onChange={(e) => handleTitleChange(e)}
          sx={{ marginBottom: "1rem" }}
        />
        <Textarea
          disabled={false}
          className={styles.widthFull}
          placeholder="Content"
          minRows={2}
          size="lg"
          onChange={(e) => handleContentChange(e)}
          sx={{ marginBottom: "1rem" }}
        />
        <Button
          className={styles.widthFull}
          variant="contained"
          onClick={handleClick}
          style={{ marginBottom: "1rem" }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default AddArticle;
