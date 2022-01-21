const mongoose = require('mongoose');

const { Schema } = mongoose;
// Valid categories are: Vodka, Rum, Gin, Whiskey, Tequila, AddOnsFood, AddOnsZoom (7 categories total)
const categorySchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true
    }
  });

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;