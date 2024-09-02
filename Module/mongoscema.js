const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  availability: {
    type: String,
    required: true,
  },
  interests: {
    type: [String],
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Volunteer', volunteerSchema);
