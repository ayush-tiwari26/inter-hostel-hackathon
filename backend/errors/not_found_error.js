const CustomError = require('./custom_error');
class NotFoundError extends CustomError {
    constructor() {
        statusCode = 404;
        super('route not found');
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
    serializeErrors() {
        return [{ message: 'This route not found' }];
    }
}

module.exports = { NotFoundError };