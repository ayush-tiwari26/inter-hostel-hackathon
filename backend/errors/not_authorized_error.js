const CustomError = require('./custom_error');
class NotAuthorizedError extends CustomError {
    statusCode = 401;
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, NotAuthorizedError.prototype);
    }
    serializeErrors() {
        return [{ message: this.message }];
    }
}
module.exports = { NotAuthorizedError };