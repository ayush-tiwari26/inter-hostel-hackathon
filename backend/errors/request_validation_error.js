const CustomError = require('./custom_error');
class RequestValidationError extends CustomError {
    statusCode = 400;
    errors;
    constructor(errors) {
        super('Error validating request parameters');
        this.errors = errors;
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
    serializeErrors() {
        const result = this.errors.map(error => {
            return {
                message: error.msg,
                field: error.param
            }
        })
        return result;
    }
}
module.exports = { RequestValidationError };