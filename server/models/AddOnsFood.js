const mongoose = require('mongoose');

const { Schema } = mongoose;

const addOnsFoodSchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    Category: 
        {
          type: Schema.Types.ObjectId,
          ref: 'Category'
        }
  });

const AddOnsFood = mongoose.model('AddOnsFood', addOnsFoodSchema);

module.exports = AddOnsFood;