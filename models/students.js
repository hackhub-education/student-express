const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentsSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: String,
    age: Number,
  // createdAt: { type: Date, default: new Date() },
  // studentType: { type: String, enum:['international', 'domestic'] }
})

const Students = mongoose.model('students', StudentsSchema);

module.exports = Students;