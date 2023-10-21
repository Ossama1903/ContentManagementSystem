const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongodb connected");
  } catch (error) {
    console.log("Error connecting to database");
    console.log("error");
    process.exit(1);
  }
};

module.exports = connectDb;
