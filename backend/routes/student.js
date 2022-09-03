const { Router } = require('express');
const {body} = require('express-validator');
const { requestValidator } = require('../middlewares/request_validator');

const router = Router();

const { signin, signup } = require('../controllers/student');

router.post('/signin', [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password").trim().notEmpty().withMessage("Password must not be empty")
],requestValidator, signin);

router.post('/signup', async (req, res) => {
    res.send('Student Signup');
})

module.exports = { router };