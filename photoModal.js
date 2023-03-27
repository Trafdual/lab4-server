const mongoose = require("mongoose");

const PhotoSchema = new mongoose.Schema({
  albumId: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    default: 0,
  },
  title: {
    type: String
  },
  url: {
    type: String
   
  },thumbnailUrl: {
    type: String
  },
});

const PhotoModel = mongoose.model("baitaps", PhotoSchema);

module.exports = PhotoModel;