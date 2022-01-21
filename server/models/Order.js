const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  eventDate: {
      type: Date,
      required: true
  },
  Products:[
    type: 
    ref: Category //(whisky, food, zoom, gin)
  ]
  CocktailKit: [
    {
      type: Schema.Types.ObjectId,
      ref: 'CocktailKit'
    }
  ],
  AddOnsZoom: [
    {
      type: Schema.Types.ObjectId,
      ref: 'AddOnsZoom'
    }
  ],
  AddOnsFood: [
    {
      type: Schema.Types.ObjectId,
      ref: 'AddOnsFood'
    }
  ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;