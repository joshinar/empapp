const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://abc123:abc123!@cluster0-depbt.mongodb.net/contact-keeper?retryWrites=true&w=majority',
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => {
        console.log('DB connected');
      }
    );
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;
