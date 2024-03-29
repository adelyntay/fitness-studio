const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registrationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

const classSchema = new Schema({
  classType: {
    type: String,
    enum: ['Yoga', 'Pilates', 'Cycle', 'BodyCombat']
  },
  instructor: {
    type: String,
    enum: ['Harry', 'Hermione', 'Voldemort', 'Snape', 'Ron']
  },
  level: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Beast']
    },
  date: {
    type: Date,
  },
  duration: {
    type: String, 
    default: '45 mins'
  },
  registration: [registrationSchema]
},{
});

module.exports = mongoose.model('Class', classSchema);