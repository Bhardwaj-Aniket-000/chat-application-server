const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Connect to DB");
    });

    connection.on("error", (error) => {
      console.log("Something is wrong in mongodb ", error);
    });
  } catch (error) {
    console.log("Something is wrong error is ", error);
  }
}

module.exports = connectDB;
