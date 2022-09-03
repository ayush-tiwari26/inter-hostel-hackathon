class CustomError extends Error {
    status;
    constructor(message, status) {
        super(message);
        this.status = status;
    }
    serializeErrors() {
        return [{ message: this.message }];
    }
}

export { CustomError };