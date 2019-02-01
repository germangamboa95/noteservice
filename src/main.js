const app = require("./server");
const express = require("express");
const morgan = require("morgan");
const NoteApi = require("./notesApi");

app.use(morgan("combined"));
app.use(express.json());

app.use("/api/v1/", NoteApi);

app.get("*", function(req, res) {
  res.send("hello, world!");
});
