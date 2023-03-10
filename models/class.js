const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({
  classType: {
    type: String,
    enum: ['Yoga', 'Pilates', 'Cycle', 'BodyCombat'],
  },
  instructor: {
    type: String,
    enum: ['Harry', 'Hermione', 'Voldemort', 'Snape', 'Ron'],
  },
  level: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Beast']
    },
  date: {
    type: Date,
    timezone: false,
  },
  duration: Number,
},{
});

module.exports = mongoose.model('Class', classSchema);