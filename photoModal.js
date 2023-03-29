const mongoose = require("mongoose");

const PhotoSchema = new mongoose.Schema({
  ten: {
    type: String
},
tuoi: {
    type: Number,
    default: 0
},
diachi: {
    type: String,
    required: true
}
});
const PhotoModel = mongoose.model("baitaps", PhotoSchema);

module.exports = PhotoModel;