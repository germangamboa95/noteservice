const express = require("express");

const app = express();

const __PORT = process.env.__PORT || 3000;

app.listen(__PORT, () => {
  console.log("Server started on port", __PORT);
});

module.exports = app;
