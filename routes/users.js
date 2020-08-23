const express = require('express');
const mongoose = require('mongoose');
const routes = express.Router();
const userModel = mongoose.model(
  'User',
  new mongoose.Schema({ name: String, email: String })
);

routes.get('/', async (req, res) => {
  const users = await userModel.find().select('-password');
  res.send(users);
});

module.exports = routes;
