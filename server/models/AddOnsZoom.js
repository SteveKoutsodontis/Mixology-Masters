const mongoose = require('mongoose');

const { Schema } = mongoose;

const addOnsZoomSchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    }
  });

const AddOnsZoom = mongoose.model('AddOnsZoom', addOnsZoomSchema);

module.exports = AddOnsZoom;