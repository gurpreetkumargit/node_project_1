const mongoose = require("mongoose");

async function connectMongoDB(url) {
  mongoose
    .connect(url)
    .then(() => {
      console.log("mongo db connected");
    })
    .catch((err) => console.log("error in mongo connection" + err));
}

module.exports = {
  connectMongoDB,
};
