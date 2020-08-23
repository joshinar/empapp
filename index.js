const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes/users');
const connectDB = require('./config/db');

// DB connection
connectDB();
app.use(cors());
app.use('/users', routes);
app.get('/', (req, res) => {
  res.send('Welcome!!, Go to /users');
});
app.use(express.json());
app.listen(process.env.PORT || 3000, () => console.log('Server connected'));
