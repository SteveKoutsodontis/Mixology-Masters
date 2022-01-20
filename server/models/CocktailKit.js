const mongoose = require('mongoose');

const { Schema } = mongoose;

const cocktailKitSchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    image: {
        type: String,
        required: true,
    },
    ingredients: [{
        ingredient: {
            type: String,
            required: true
        }
    }],
    didYouKnow: {
        type: String
    },
    price: {
        type: Number,
        required: true
    }
  });

const CocktailKit = mongoose.model('CocktailKit', cocktailKitSchema);

module.exports = CocktailKit;