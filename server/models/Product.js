const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    ingredients: [{
        ingredient: {
            type: String,
            
        }
    }],

    // for the add on foods it will be description for cocktails it will be did you know
    description: {
        type: String
    },
   
    Category: 
        {
          type: Schema.Types.ObjectId,
          ref: 'Category',
          required: true
        },
      
  });

const Product = mongoose.model('Products', productSchema);

module.exports = Product;