import React, { useState } from "react";
import { useSnackbar } from "../../contexts/useSnackbar";
import login from "../../requestHandlers/users/login";
import { Link, useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import { Button, TextField, Typography } from "@mui/material";
import { useAuth } from "../../contexts/useAuth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { setToken } = useAuth();

  const { showSnackbar } = useSnackbar();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (username === "" || password === "") {
      showSnackbar("Please fill in all the fields", "error");
      return;
    }
    login(username, password)
      .then((response) => {
        localStorage.setItem("token", response.token);
        setToken(response.token);
        navigate("/");
      })
      .catch(() => {
        showSnackbar("An error occured while logging in", "error");
      });
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.innerContainer}>
        <TextField
          required
          label="Username"
          variant="standard"
          className={styles.widthFull}
          onChange={(e) => handleUsernameChange(e)}
        />
        <TextField
          required
          label="Password"
          variant="standard"
          className={styles.widthFull}
          onChange={(e) => handlePasswordChange(e)}
          sx={{ marginBottom: "1rem" }}
        />
        <Button
          className={styles.widthFull}
          variant="contained"
          onClick={handleSubmit}
          style={{ marginBottom: "1rem" }}
        >
          Submit
        </Button>
        <Typography variant="p">
          Don't have an account? <Link to={"/signup"}>Register here</Link>
        </Typography>
      </div>
    </div>
  );
};

export default Login;
