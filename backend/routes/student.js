const { Router } = require('express');
const {body} = require('express-validator');
const { requestValidator } = require('../middlewares/request_validator');

const router = Router();

const { signin } = require('../controllers/student/signin');
const { signup } = require('../controllers/student/signup');
const { currentUser } = require('../middlewares/current_user');

router.post('/signin', [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password").trim().notEmpty().withMessage("Password must not be empty")
],requestValidator, signin);

router.post('/signup',[
    body("email").isEmail().withMessage("Email must be valid"),
    body("name").trim().notEmpty().withMessage("Name must not be empty"),
    body("phone").trim().notEmpty().withMessage("Phone must not be empty"),
    body("hostel").trim().notEmpty().withMessage("Hostel must not be empty"),
    body("roll_no").trim().notEmpty().withMessage("Roll no must not be empty"),
    body("room_no").trim().notEmpty().withMessage("Room no must not be empty")
], requestValidator, currentUser, signup);

module.exports = { router };