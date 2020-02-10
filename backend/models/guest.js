const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema({
  isGoing: {
    type: String,
    required: true,
    enum: ['tak', 'nie']
    },
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  numberOfGuests: {
    type: String,
    required: true,
    enum: ['1', '2','3','4', '5', '6']
  }
});

guestSchema.pre('save', function (next) {
  const guest = this;
  const name = guest.name
    .toLowerCase()
    .trimEnd()
    .trimStart()
  guest.name = name;
  next();
});

const Guest = mongoose.model('Guest', guestSchema);

module.exports = Guest;