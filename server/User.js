const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

const { Schema } = mongoose;

const userSchema = new Schema({
  log: { type: String, required: true },
  pass: { type: String, required: true },
});

const user = mongoose.model('user', userSchema);

module.exports = user;