const mongoose = require('mongoose');

const { Schema } = mongoose;

const alcoholCategorySchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true
    }
  });

const AlcoholCategory = mongoose.model('AlcoholCategory', alcoholCategorySchema);

// module.exports = AlcoholCategory;