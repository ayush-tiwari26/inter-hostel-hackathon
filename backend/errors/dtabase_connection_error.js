import CustomError from './custom_error';
class DatabaseConnectionError extends CustomError {
    reason = 'Error connecting to database';
    statusCode = 500;
    constructor() {
        super(this.reason);
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }
    serializeErrors() {
        return [{ message: this.reason }];
    }
}

module.exports = { DatabaseConnectionError };