const mongoose = require('mongoose');

const { Schema } = mongoose;

const logEntrySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  descriptions: {
    type: String,
  },
  imageCover: String,
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 10,
  },
  comments: {
    type: String,
  },
  longitude: {
    type: Number,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  visitDate: {
    type: Date,
    required: true,
  },

}, { timestamps: true });

const logEntryModel = mongoose.model('logEntry', logEntrySchema);

module.exports = logEntryModel;
