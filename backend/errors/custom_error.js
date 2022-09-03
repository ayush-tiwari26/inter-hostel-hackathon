class CustomError extends Error {
    statusCode;
    constructor(message) {
        super(message);
    }
    serializeErrors() {
        return [{ message: this.message }];
    }
}

module.exports = CustomError;