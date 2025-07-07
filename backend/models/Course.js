const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  label: String,
  date: String,
  image: String,
  status: String,
});

module.exports = mongoose.model('Course', CourseSchema);
