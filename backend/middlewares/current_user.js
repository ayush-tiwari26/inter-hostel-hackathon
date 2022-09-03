const jwt = require('jsonwebtoken');
const currentUser = (req, res, next) => {
    if(!req.headers.authorization) {
        res.currentUser = null;
        return next();
    }
    const token = req.headers.authorization.split(' ')[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.currentUser = payload;
    next();
}

module.exports = {
    currentUser
}