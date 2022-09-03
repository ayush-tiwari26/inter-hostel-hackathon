const { RequestValidationError } = require('../errors/request_validation_error');
const { validationResult } = require('express-validator');

const requestValidator = (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        throw new RequestValidationError(error.array());
    }
    next();
}

module.exports = {
    requestValidator
}