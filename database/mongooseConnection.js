const mongoose = require("mongoose");
const mongodb_uri = process.env.MONGODB_URI;

const mongooseConnection = mongoose.connect(
  mongodb_uri,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  () => console.log(`the mongoose is on the loose`)
);

module.exports = mongooseConnection;
