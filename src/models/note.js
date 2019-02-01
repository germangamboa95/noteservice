const { Schema, model } = require("./db");

const Note = new Schema({
  title: {
    type: String,
    require: true,
    trim: true,
    minlength: 1,
    maxlength: 100
  },
  body: {
    type: String,
    require: true,
    trim: true,
    minlength: 10,
    maxlength: 1000
  },
  private: {
    type: Boolean,
    require: true,
    default: true
  },
  tags: {
    type: Array,
    default: ["new"]
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now()
  }
});

module.exports = model("Note", Note);
