const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/db";
const mongo = require('mongodb');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/27017', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false
});

module.exports = mongoose.connection;
