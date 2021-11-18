const mongoose = require('mongoose');

require('dotenv').config();
const URI = process.env.ATLAS_URI
const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }).then(() => {
  console.log('mongo-db connected..!');
  }).catch((error) => {
    console.log('Connection Failed', error.message);
  });
};

module.exports = connectDB;