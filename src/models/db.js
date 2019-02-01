const mongoose = require("mongoose");

const opts = {
  useNewUrlParser: true
};

mongoose.connect("mongodb://localhost:27017/test", opts);

module.exports = mongoose;
