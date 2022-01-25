const mongoose = require('mongoose');

const { Schema } = mongoose;

const cartItemSchema = new Schema({
  product:
    {
    type: Schema.Types.ObjectId,
    ref: 'Product'
    },
  quantity: {
    type: Number,
    required: true
  }
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

module.exports = CartItem;