require('dotenv').config();
require('express-async-errors');
const express = require('express');
const cors = require('cors');

const { router: studentRouter } = require('./routes/student');
const { router: adminRouter } = require('./routes/admin');
const { router: ticketsRouter } = require('./routes/tickets');

const { NotFoundError } = require('./errors/not_found_error');
const { errorHandler } = require('./middlewares/error_handler');

const app = express();
app.use(cors())
app.use(express.json());

app.use('/student', studentRouter);
app.use('/admin', adminRouter);
app.use('/tickets', ticketsRouter);

app.all('*', (req, res) => {
    throw new NotFoundError();
})

app.use(errorHandler);

module.exports = { app };