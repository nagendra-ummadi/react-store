const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      snippet: {
        type: String,
        required: true,
      },
      body: {
        type: String,
        required: true
      },
    });

const blogModel = mongoose.model("blogs",blogSchema);

module.exports = blogModel;
