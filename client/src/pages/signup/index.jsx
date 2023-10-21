import React, { useState } from "react";
import { useSnackbar } from "../../contexts/useSnackbar";
import signup from "../../requestHandlers/users/signup";
import styles from "./signup.module.css";
import { Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const { showSnackbar } = useSnackbar();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (email === "" || password === "" || username === "") {
      showSnackbar("Please fill in all the fields", "error");
      return;
    }
    signup(username, email, password)
      .then((response) =>
        showSnackbar("User has been registered successfully", "success")
      )
      .catch((error) =>
        showSnackbar("There was an error registering the user", "error")
      );
  };

  return (
    <div className={styles.signupPage}>
      <div className={styles.innerContainer}>
        <TextField
          required
          label="Email"
          variant="standard"
          className={styles.widthFull}
          onChange={(e) => handleEmailChange(e)}
        />
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
          sx={{ marginBottom: "1rem" }}
        >
          Submit
        </Button>
        <Typography variant="p">
          Already have an account? <Link to={"/login"}>Login instead</Link>
        </Typography>
      </div>
    </div>
  );
};

export default Signup;
