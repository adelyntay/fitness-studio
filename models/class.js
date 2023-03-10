const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({
  class: {
    type: String,
    enum: ['Yoga', 'Pilates', 'Cycle', 'BodyCombat'],
  instructor: {
    type: String,
    enum: ['Harry', 'Hermione', 'Voldemort', 'Snape', 'Ron'],
  },
  level: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Beast']
    },
  duration: Number,
}
});

module.exports = mongoose.model('Class', classSchema);