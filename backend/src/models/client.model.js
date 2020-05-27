
const { Schema, model } = require('mongoose');

const clientSchema = new Schema({
  store:{
    type: String,
    required: true
  },
  firstName:{
    type: String,
    required: true
  },
  secondName: {
    type: String
  },
  firstLastName: {
    type: String,
    required: true
  },
  secondLastName: {
    type: String
  },
  identificationType: {
    type: String,
    enum: ['CC', 'CE', 'PASSPORT', 'NIT', 'TI'],
    required: true
  },
  identification: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  neighborhood: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  birthday: {
    type: Date,
    required: true
  },
  telephone: {
    type: Number,
    min : 1000000,
    max : 9999999
  },
  cellphone: {
    type: Number,
    min : 1000000000,
    max : 9999999999,
    required: true
  },
  stratum: {
    type: Number,
    enum: [1, 2, 3, 4, 5, 6],
    required: true
  }
}, {
  timestamps: true,
});

const Client = model('Client', clientSchema);

module.exports = Client;