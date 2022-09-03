import CustomError from './custom_error';
class DatabaseConnectionError extends CustomError {
    reason = 'Internal server error';
    statusCode = 500;
    constructor(reason) {
        super(reason || this.reason);
        this.reason = reason || this.reason;
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }
    serializeErrors() {
        return [{ message: this.reason }];
    }
}
module.exports = { DatabaseConnectionError };