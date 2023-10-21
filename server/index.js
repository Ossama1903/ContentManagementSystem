const express = require("express");
const connectDb = require("./lib/db");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

connectDb();

app.use("/api/article", require("./routes/articles"));
app.use("/api/user", require("./routes/users"));

app.listen(port, () => {
  console.log(`The server is up and running on ${port}`);
});
