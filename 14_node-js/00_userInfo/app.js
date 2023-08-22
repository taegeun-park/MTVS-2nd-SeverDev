const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

const userRoutes = require('./src/routes/user-route');

app.use('/users', userRoutes);

app.listen(8888, () => console.log('Listening on port 8888'));