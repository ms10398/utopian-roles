const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  roles: {
    type: [String],
    default: ['contributor'],
    required: true
  }
},{
  collection: 'userSchema'
})

module.exports = mongoose.model('userSchema', userSchema);
